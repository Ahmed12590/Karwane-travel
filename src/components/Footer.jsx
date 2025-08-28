export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <p>© {year} All Rights Reserved — <strong>Karwan-e-Mikaeel</strong></p>
         <p>Developed by  <a href="https://theahmedportfolio.vercel.app/">Ahmed</a></p>
        
      </div>
    </footer>
  )
}
