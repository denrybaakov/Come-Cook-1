

import videoFood from './video/food.mp4'

const ClientPage = () => {
  return (
    <section className="client">
      <video autoplay muted loop>
        <source src={videoFood} type="video/mp4"></source>
      </video>
      <h2 className="title">Клиент</h2>

    </section>
  )
}

export default ClientPage
