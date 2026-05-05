import { useEffect } from 'react'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Modal from '@/components/modal/Modal'

function ModalConsumer() {
  const params = useSearchParams()
  const src = params.get('src') ? decodeURIComponent(params.get('src')) : null
  const alt = params.get('alt') ?? ''
  const show = !!params.get('show') && !!src

  useEffect(() => {
    if (show) { document.body.classList.add('modal-show') }
    return () => { document.body.classList.remove('modal-show') }
  }, [show])

  if (!show) return null
  return <Modal src={src} alt={alt} />
}

export default function ModalProvider() {
  return (
    <Suspense fallback={null}>
      <ModalConsumer />
    </Suspense>
  )
}
