"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <main style={{ backgroundColor: '#121212', color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>جاري التحميل...</p>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
      {!session ? (
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🛡️ لوحة تحكم ii3RwA</h1>
          <p style={{ color: '#888', marginBottom: '20px' }}>يرجى تسجيل الدخول لإدارة البوت</p>
          <button 
            onClick={() => signIn('github')} 
            style={{ padding: '12px 24px', fontSize: '18px', cursor: 'pointer', borderRadius: '8px', border: 'none', backgroundColor: '#fff', color: '#000', fontWeight: 'bold' }}
          >
            الدخول عبر GitHub
          </button>
        </div>
      ) : (
        <div>
          <h1>مرحباً بك، {session.user?.name} 👋</h1>
          <div style={{ background: '#1e1e1e', padding: '30px', borderRadius: '15px', marginTop: '20px', border: '1px solid #333' }}>
             <h3 style={{ color: '#4caf50', marginBottom: '10px' }}>متصل بنجاح ✅</h3>
             <p style={{ color: '#ccc' }}>أنت تملك الآن صلاحيات التحكم الكاملة</p>
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
