import { WhatsappLogo } from "@phosphor-icons/react"

export function WhatsappContact() {

  const redirectWpp = () => {
    const phone = '18565155899'

    const url = `https://wa.me/${phone}`

    window.open(url, '_blank')
  }

  return (
    <div 
    onClick={redirectWpp}
    className="cursor-pointer flex items-center justify-center fixed bottom-6 right-4 bg-emerald-950 rounded-full w-14 h-14">
      <WhatsappLogo size={32} className="text-green-600"/>
    </div>
  )
}
