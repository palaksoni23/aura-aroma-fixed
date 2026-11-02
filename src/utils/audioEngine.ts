/**
 * Web Audio API Ambient Cafe & Vinyl Soundscape Generator
 * Synthesizes ultra-gentle warm cafe room tone, soft fireplace/vinyl crackle,
 * and soothing acoustic hum with zero external audio assets.
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      if (!this.ctx) return;

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 1.5);
      this.masterGain.connect(this.ctx.destination);

      // 1. Soft Warm Brown Noise for Cafe Room Air & Vinyl warmth
      const bufferSize = this.ctx.sampleRate * 3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filter
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 1.8;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Low pass filter to make it velvet warm
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);

      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.masterGain);
      this.noiseNode.start();

      // 2. Ultra-quiet warm acoustic drone tone (F# major chord warmth 92Hz)
      this.droneOsc = this.ctx.createOscillator();
      this.droneOsc.type = 'sine';
      this.droneOsc.frequency.setValueAtTime(92.5, this.ctx.currentTime);

      const droneGain = this.ctx.createGain();
      droneGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      this.droneOsc.connect(droneGain);
      droneGain.connect(this.masterGain);
      this.droneOsc.start();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    try {
      const current = this.ctx.currentTime;
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, current + 0.6);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.droneOsc?.stop();
          this.noiseNode?.disconnect();
          this.droneOsc?.disconnect();
        } catch {
          // ignore
        }
        this.isPlaying = false;
      }, 700);
    } catch {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = new AmbientAudioEngine();
