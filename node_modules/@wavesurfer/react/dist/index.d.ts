/**
 * A React component for wavesurfer.js
 *
 * Usage:
 *
 * import WavesurferPlayer from '@wavesurfer/react'
 *
 * <WavesurferPlayer
 *   url="/my-server/audio.ogg"
 *   waveColor="purple"
 *   height={100}
 *   onReady={(wavesurfer) => console.log('Ready!', wavesurfer)}
 * />
 */
import { type ReactElement, type RefObject } from 'react';
import WaveSurfer, { type WaveSurferEvents, type WaveSurferOptions } from 'wavesurfer.js';
type WavesurferEventHandler<T extends unknown[]> = (wavesurfer: WaveSurfer, ...args: T) => void;
type OnWavesurferEvents = {
    [K in keyof WaveSurferEvents as `on${Capitalize<K>}`]?: WavesurferEventHandler<WaveSurferEvents[K]>;
};
type PartialWavesurferOptions = Omit<WaveSurferOptions, 'container'>;
/**
 * Props for the Wavesurfer component
 * @public
 */
export type WavesurferProps = PartialWavesurferOptions & OnWavesurferEvents;
/**
 * Use wavesurfer instance
 */
declare function useWavesurferInstance(containerRef: RefObject<HTMLDivElement | null>, options: Partial<WaveSurferOptions>): WaveSurfer | null;
/**
 * Use wavesurfer state
 */
declare function useWavesurferState(wavesurfer: WaveSurfer | null): {
    isReady: boolean;
    isPlaying: boolean;
    currentTime: number;
};
/**
 * Wavesurfer player component
 * @see https://wavesurfer.xyz/docs/modules/wavesurfer
 * @public
 */
declare const WavesurferPlayer: import("react").MemoExoticComponent<(props: WavesurferProps) => ReactElement>;
/**
 * @public
 */
export default WavesurferPlayer;
/**
 * React hook for wavesurfer.js
 *
 * ```
 * import { useWavesurfer } from '@wavesurfer/react'
 *
 * const App = () => {
 *   const containerRef = useRef<HTMLDivElement | null>(null)
 *
 *   const { wavesurfer, isReady, isPlaying, hasFinished, currentTime } = useWavesurfer({
 *     container: containerRef,
 *     url: '/my-server/audio.ogg',
 *     waveColor: 'purple',
 *     height: 100',
 *   })
 *
 *   return <div ref={containerRef} />
 * }
 * ```
 *
 * @public
 */
export declare function useWavesurfer({ container, ...options }: Omit<WaveSurferOptions, 'container'> & {
    container: RefObject<HTMLDivElement | null>;
}): ReturnType<typeof useWavesurferState> & {
    wavesurfer: ReturnType<typeof useWavesurferInstance>;
};
