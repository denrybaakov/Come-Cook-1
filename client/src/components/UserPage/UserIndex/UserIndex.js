

import avatar from './img/avatar.png'

const UserIndex = () => {

  return (
    <section className="profile">
      <div className="container">
        <div className="row profile__row">
          <div className="col-30 profile__col-30">
            <img src={avatar} alt="" className="profile__img" />
          </div>
          <div className="col-70 profile__col-70">col-70</div>
          <div className="col-30 profile__col-30">col-30</div>
          <div className="col-70 profile__col-70">col-70</div>
        </div>
      </div>
    </section>
  )
}

export default UserIndex
