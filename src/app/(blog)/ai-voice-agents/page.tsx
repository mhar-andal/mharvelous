'use client'

import React from 'react'

import { CodeBlock } from '@/components/ui/code-block'
import { LinkPreview } from '@/components/ui/link-preview'

function VoiceAIAgent() {
  const code = `import asyncio

from pipecat.frames.frames import TextFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.task import PipelineTask
from pipecat.pipeline.runner import PipelineRunner
from pipecat.services.cartesia import CartesiaTTSService
from pipecat.transports.services.daily import DailyParams, DailyTransport

async def main():
  # Use Daily as a real-time media transport (WebRTC)
  transport = DailyTransport(
    room_url=...,
    token="", # leave empty. Note: token is _not_ your api key
    bot_name="Bot Name",
    params=DailyParams(audio_out_enabled=True))

  # Use Cartesia for Text-to-Speech
  tts = CartesiaTTSService(
    api_key=...,
    voice_id=...
  )

  # Simple pipeline that will process text to speech and output the result
  pipeline = Pipeline([tts, transport.output()])

  # Create Pipecat processor that can run one or more pipelines tasks
  runner = PipelineRunner()

  # Assign the task callable to run the pipeline
  task = PipelineTask(pipeline)

  # Register an event handler to play audio when a
  # participant joins the transport WebRTC session
  @transport.event_handler("on_first_participant_joined")
  async def on_first_participant_joined(transport, participant):
    participant_name = participant.get("info", {}).get("userName", "")
    # Queue a TextFrame that will get spoken by the TTS service (Cartesia)
    await task.queue_frame(TextFrame(f"Hello there, {participant_name}!"))

  # Register an event handler to exit the application when the user leaves.
  @transport.event_handler("on_participant_left")
  async def on_participant_left(transport, participant, reason):
    await task.cancel()

  # Run the pipeline task
  await runner.run(task)

if __name__ == "__main__":
  asyncio.run(main())
`

  const code2 = `
from pipecat.frames.frames import OutputAudioRawFrame, Frame, TextFrame, UserImageRequestFrame
from pipecat.pipeline.pipeline import Pipeline
from pipecat.pipeline.runner import PipelineRunner
from pipecat.processors.aggregators.user_response import UserResponseAggregator
from pipecat.pipeline.task import PipelineParams, PipelineTask
from pipecat.processors.logger import FrameLogger
from pipecat.processors.frame_processor import FrameDirection
from pipecat.services.cartesia import CartesiaTTSService
from pipecat.services.openai import (
    OpenAILLMContext,
    OpenAILLMContextFrame,
    OpenAILLMService,
)
from pipecat.services.elevenlabs import ElevenLabsTTSService
from pipecat.processors.aggregators.vision_image_frame import VisionImageFrameAggregator
from pipecat.processors.frame_processor import FrameDirection, FrameProcessor
from pipecat.transports.services.daily import DailyParams, DailyTransport
from pipecat.vad.silero import SileroVADAnalyzer

class IntakeProcessor:
  def __init__(self, context: OpenAILLMContext):
      print(f"Initializing context from IntakeProcessor")

      # Add relevant business context to the LLM
      context.add_message(
          {
              "role": "system",
              "content": f"""
              You are Alex, an agent for a company called Ender. Your job is to active as a companion of a virtual gaming club. 
              
              The user is in central time.

              You should address the user by their first name and be polite as if you were talking to a child.
              Add punctuation where appropriate and at the end of each transcript whenever possible. 
              To insert pauses, insert “-” where you need the pause.

              Your job is to help the child with any questions they have.

              Talk in simple sentences for a child to understand.

              The gaming club is from 4-6 PM in all timezones.

              This user in particular is neurodivergent, so be very kind and patient with them.

              You must follow these guidelines:
              
              Empathy and Support: You should recognize when a child may be frustrated or anxious and respond with encouragement and reassurance.

              Example Behavior: If a child expresses frustration (“This level is too hard!”), you could respond with:
              "It sounds like you're feeling a bit stuck, and that's okay! How about we try breaking it down into smaller steps? What’s one thing we can try together?"

              Encouraging Social Interaction: You should promote teamwork and connection by encouraging kids to interact with their peers positively.

              Example Behavior: When the child completes a task, you might say:
              "Great job! Would you like to share what you did with your teammates? They might find it really helpful!"

              Autonomy and Choice: You should offer choices that allow the child to feel in control of their gaming experience.

              Example Behavior: When a child completes a challenge, the chatbot can offer multiple options:
              "Congrats on finishing! Would you like to explore a new area, customize your character, or take a quick break"

              Clear Instructions and Guidance: The chatbot should provide clear, step-by-step instructions to help kids who may struggle with more complex gameplay or social situations.

              Example Behavior: If a child seems confused about the next step, the bot can explain simply:
              "No worries if you're unsure! Here's what you can do next: First, open the map, then choose the challenge you want to try. If you need more help, just ask!"

              Encouraging Breaks and Self-Care: The chatbot should encourage kids to take breaks when needed, promoting mindfulness and well-being.

              Example Behavior: After noticing the child has been playing for a long time, the chatbot could say:
              "You’ve been playing for a while now—how about a quick stretch or water break? You can jump back into the fun in just a few minutes!"

              Your job is to help the child with any questions they have.
              Ask for clarification if a user response is ambiguous.

              If they ask about how to join the minecraft server, ask them what device do they want to join on? There should be 4 options: Computer, phone, tablet, or console(switch, xbox).

              If they say xbox, you must tell them these steps

              1. Visit https://account.xbox.com/settings.
              2. Under "Privacy" in the table header, locate the setting labeled "You can communicate outside of Xbox with voice & text" Choose Allow.
              3. Under "Xbox and Windows 10 devices Online Safety" in the table header, select Allow for "You can create and join clubs", "You can join multiplayer games", and "You can add friends"

              If they say computer, phone, or tablet, you must tell them these steps

              1. Open Minecraft
              2. Click multiplayer then add server button
              3. Type "minecraft.joinender.com" in address
              4. Click Minecraft Club in your server list
              5. Enter the code you see in Minecraft

              If the user ask for a host or moderator, tell them that you will send a request for a host or moderator to join the room.

              If the user wants to report an incident, ask for details then tell them that you will send a report to the host or moderator.

              Start by introducing yourself and say you are a companion for the Ender Minecraft Club.

              """,
          }
      )
      context.set_tools(
          [
              {
                  "type": "function",
                  "function": {
                      "name": "report_incident",
                      "description": "Use this function to an report_incident.",
                      "parameters": {
                          "type": "object",
                          "properties": {
                              "incident": {
                                  "type": "string",
                                  "description": "Capture the incident details.",
                              }
                          },
                      },
                  },
              }
          ]
      )

  async def report_incident(
      self, function_name, tool_call_id, args, llm, context, result_callback
  ):
        context.set_tools(
            [
                {
                    "type": "function",
                    "function": {
                        "name": "list_prescriptions",
                        "description": "Once the user has provided a list of their prescription medications, call this function.",
                        "parameters": {
                            "type": "object",
                            "properties": {
                                "prescriptions": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "medication": {
                                                "type": "string",
                                                "description": "The medication's name",
                                            },
                                            "dosage": {
                                                "type": "string",
                                                "description": "The prescription's dosage",
                                            },
                                        },
                                    },
                                }
                            },
                        },
                    },
                }
            ]
        )

      await result_callback(
          [
              {
                  "role": "system",
                  "content": "Next, thank the user for reporting the incident, and let them know you'll take care of it.",
              }
          ]
      )
        else:
            # The user provided an incorrect birthday; ask them to try again
            await result_callback(
                [
                    {
                        "role": "system",
                        "content": "The user provided an incorrect birthday. Ask them for their birthday again. When they answer, call the verify_birthday function.",
                    }
                ]
            )


llm = OpenAILLMService(api_key=os.getenv("OPENAI_API_KEY"), model="gpt-4o")
messages = []
context = OpenAILLMContext(messages=messages)
context_aggregator = llm.create_context_aggregator(context)
user_response = UserResponseAggregator()
image_requester = UserImageRequester()
vision_aggregator = VisionImageFrameAggregator()

pipeline = Pipeline(
    [
        transport.input(),  # Transport input
        context_aggregator.user(),  # User responses
        user_response,
        image_requester,
        vision_aggregator,
        llm,  # LLM
        fl,  # Frame logger
        tts,  # TTS
        transport.output(),  # Transport output
        context_aggregator.assistant(),  # Assistant responses
    ]
)
`

  const code3 = `@transport.event_handler("on_first_participant_joined")
async def on_first_participant_joined(transport, participant):
    await transport.update_subscriptions(
         participant_settings={participant["id"]: {"media": {"screenVideo": "subscribed"}}}
    )
    await transport.capture_participant_video(
        participant["id"], framerate=0, video_source="screenVideo"
    )
        `

  return (
    <div className="max-w-3xl mx-auto w-full px-8 pb-14">
      <h1 className="text-3xl font-bold mb-4 text-white font-[family-name:var(--font-geist-mono)] pt-10">
        product prototype for a voice AI assistant
      </h1>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)] font-bold">
        feb 12, 2025
      </p>
      <p className="text-white text-sm font-[family-name:var(--font-geist-mono)]">
        <span className="font-bold">mhar andal</span>
      </p>
      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-12">
        During my time at{' '}
        <LinkPreview
          url="https://joinender.com"
          className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
        >
          Ender
        </LinkPreview>
        , I prototyped a voice ai agent that could help kids and moderators do
        basic daily tasks within their voice calls. Our dream use case was to
        ultimately have a companion that could conversate with context on
        exactly what you are doing in the game.
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-4">
        Let&apos;s imagine this, you are playing Minecraft and you ask your
        companion, <br />
        &quot;How can I gather wood?&quot;
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-4">
        With a proper transport, the companion would able to gather information
        from your screenshare and provide an actionable response. Let&apos;s
        deep dive on how we can make this possible using{' '}
        <LinkPreview
          url="https://www.pipecat.ai/"
          className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
        >
          Pipecat
        </LinkPreview>
        .
      </div>

      <div className="text-white text-sm font-[family-name:var(--font-geist-mono)] pt-14">
        <h2 className="text-xl font-bold mb-4">
          how to build the voice ai agent
        </h2>
        <div>
          To start, we&apos;ll need to setup a simple voice agent running
          locally. You can refer to the{' '}
          <LinkPreview
            url="https://github.com/pipecat-ai/pipecat?tab=readme-ov-file#a-simple-voice-agent-running-locally"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Pipecat README
          </LinkPreview>{' '}
          for more information on how to get started.
        </div>

        <div className="pt-4">
          We used{' '}
          <LinkPreview
            url="https://daily.co"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            Daily
          </LinkPreview>{' '}
          as our call provider built on WebRTC but pipecat supports{' '}
          <LinkPreview
            url="https://docs.pipecat.ai/server/services/supported-services"
            className="font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-500 to-pink-500"
          >
            other transports
          </LinkPreview>
          .
        </div>

        <div className="pt-4">
          <h2 className="text-sm font-bold mb-4 mt-8">
            &quot;what are transports?&quot;
          </h2>
          <p>
            Transports are base implementations for handling audio/video I/O
            streams.
          </p>
        </div>

        <div className="py-4">let&apos;s look at our code</div>

        <CodeBlock
          highlightLines={[33, 34, 35]}
          language="python"
          filename="pipecat_agent.py"
          code={code}
        />

        <div className="pt-4">
          <h2 className="text-sm font-bold mb-4 mt-8">
            transport event handlers
          </h2>
          <p className="text-sm">
            This is how we handle events from the transport. We can use this to
            handle events like when a participant joins the call or leaves.
          </p>

          <p className="pt-4">
            In the example above, we&apos;ll generate some text to speech when a
            participant joins the call.
          </p>

          <p className="py-4">
            This is a great starting point, but we need to update our pipeline
            to add more functionality.
          </p>

          <CodeBlock
            highlightLines={[184]}
            language="python"
            filename="pipecat_agent.py"
            code={code2}
          />

          <p className="py-4">
            By adding a vision aggregator to the pipeline, we can send
            contextual vision data to our LLM.
          </p>

          <p>
            This will allow the voice agent to see the user&apos;s screen and
            provide a contextual response.
          </p>

          <p className="py-4">
            We now just need to update our transport to support capturing the
            participants screen share.
          </p>

          <CodeBlock
            highlightLines={[6, 7, 8]}
            language="python"
            filename="pipecat_agent.py"
            code={code3}
          />

          <p className="py-4">
            and viola...! We&apos;ve successfully built a vision aggregator that
            can capture the user&apos;s screen share and provide it to our LLM.
          </p>

          <p>
            bonus: With the{' '}
            <span className="font-bold underline">IntakeProcessor</span>, we can
            set functions to call from the LLM to automate tasks, such as
            reporting an incident. We can also add context to the LLM to help it
            make better decisions or personalize the responses for the user.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VoiceAIAgent
