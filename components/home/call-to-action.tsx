import { Particles } from "~/components/magicui/particles"
import { PulsatingButton } from "~/components/magicui/pulsating-button"

export const CallToAction = () => {
  return (
    <section className="relative flex min-h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-rose-500 via-rose-400 to-pink-500 p-8 text-center">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <h2 className="text-4xl font-bold text-white">
          Start Your Journey Today
        </h2>
        <p className="text-xl text-rose-100">
          &ldquo;เริ่มต้นการเดินทางสุดพิเศษกับเรา
          สัมผัสประสบการณ์ที่องเที่ยวที่เหนือระดับและน่าจดจำ&rdquo;
        </p>
        <PulsatingButton
          className="rounded-full bg-primary text-white"
          pulseColor="#facc15"
        >
          Book Your Tour
        </PulsatingButton>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
    </section>
  )
}
