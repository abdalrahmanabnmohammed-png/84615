"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      {!session ? (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🛡️ لوحة تحكم ii3RwA</h1>
          <p style={{ color: '#888', marginBottom: '20px' }}>يرجى تسجيل الدخول للتحكم بالبوت</p>
          <button 
            onClick={() => signIn('github')} 
            style={{ padding: '12px 24px', fontSize: '18px', cursor: 'pointer', borderRadius: '8px', border: 'none', backgroundColor: '#fff', color: '#000', fontWeight: 'bold' }}
          >
            الدخول عبر GitHub
          </button>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1>مرحباً بك، {session.user?.name} 👋</h1>
          <div style={{ background: '#1e1e1e', padding: '30px', borderRadius: '15px', marginTop: '20px', border: '1px solid #333' }}>
             <h3 style={{ color: '#4caf50' }}>تم الاتصال بنجاح ✅</h3>
             <p>أنت الآن مدير البوت في السيرفر</p>
             <button 
               onClick={() => signOut()} 
               style={{ marginTop: '20px', color: '#ff4d4d', background: 'none', border: '1px solid #ff4d4d', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}
             >
               تسجيل الخروج
             </button>
          </div>
        </div>
      )}
    </main>
  )
}
