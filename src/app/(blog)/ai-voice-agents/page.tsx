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

  return (
    <div className="max-w-3xl mx-auto w-full px-8">
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
        , we prototyped a voice ai agent that could help kids and moderators do
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
          To start, we'll need to setup a simple voice agent running locally.
          You can refer to the{' '}
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
          <h2 className="text-sm font-bold mb-4">
            &quot;what&apos;s a transport?&quot;
          </h2>
          <p>
            Transports are base implementations for handling audio/video I/O
            streams.
          </p>
        </div>

        <div className="py-4">let&apos;s look at our code</div>

        <CodeBlock language="python" filename="pipecat_agent.py" code={code} />
      </div>
    </div>
  )
}

export default VoiceAIAgent
