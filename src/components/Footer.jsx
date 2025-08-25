export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <p>© {year} TravelSite, all rights reserved</p>
        <p>Email, hello@travelsite.test</p>
      </div>
    </footer>
  )
}
