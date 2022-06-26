import Head from 'next/head';
import Header from 'components/header';
import FloatingWhatsApp from 'react-floating-whatsapp'
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'JS Store - Moda Feminina' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        {children}
      </main>

      <FloatingWhatsApp
        avatar='/images/logo.png'
        statusMessage='Respondo dentro de 1 hora'
        className="floating-whatsapp"
        phoneNumber="5519984520307"
        accountName="Jessica"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
        chatMessage='Olá, tudo bom! Como posso te ajudar?'
        placeholder='Mensagem'
      />
    </div>
  )
}