import ArtGrid from '@/components/ArtGrid'
import ModalProvider from '@/components/modal/ModalProvider'

export default function Home() {
  return (
    <>
      <main>
        <ArtGrid/>
      </main>
      <ModalProvider/>
    </>
  );
}
