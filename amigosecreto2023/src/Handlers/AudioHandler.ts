import { Audio, AudioListener, AudioLoader } from "three";
import weare from "../assets/audios/weare.mp3";
import jinglebells from "../assets/audios/jinglebells.mp3";

export default class AudioHandler {
  static currentAudio?: Audio = undefined;

  static playChristmasSong() {
    AudioHandler.playMusic(jinglebells);
  }

  static playWeAre() {
    AudioHandler.playMusic(weare);
  }

  static playMusic(music: any) {
    if (AudioHandler.currentAudio) AudioHandler.stopMusic();
    const listener = new AudioListener();
    AudioHandler.currentAudio = new Audio(listener);
    const audioLoader = new AudioLoader();
    audioLoader.load(music, function (buffer) {
      AudioHandler.currentAudio?.setBuffer(buffer);
      AudioHandler.currentAudio?.setLoop(true);
      AudioHandler.currentAudio?.setVolume(0.5);
      AudioHandler.currentAudio?.play();
    });
  }

  static stopMusic() {
    console.log("STOP");
    console.log(AudioHandler.currentAudio);
    AudioHandler.currentAudio?.stop();
  }
}
