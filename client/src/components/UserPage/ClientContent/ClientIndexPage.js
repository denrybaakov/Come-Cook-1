import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrentOrdersClient, getFinishedOrdersClient } from "../../../redux/actions/ordersAction";



const ClientIndexPage = () => {

  // const { id } = useSelector(state => state.user)
  // const dispatch = useDispatch();
  // const currentOrders = useSelector(state => state.ordersCurrentClient)
  // const finishedOrders = useSelector(state => state.ordersFinishedClient)
  // console.log('temp in clientindex ----->', finishedOrders);

  // useEffect(() => {
  //   // dispatch(getCurrentOrdersClient(id))
  //   dispatch(getFinishedOrdersClient(id))
  // }, []);

  return (
    <div className="col-70 profile__col-70">
      <h2 className="profile__title">Главная страница Клиента</h2>
      Клиент - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dicta quos unde tempore nisi similique aut sit cumque expedita nemo facere quas aliquid quam accusamus illum, ratione ad laudantium molestiae numquam officia natus porro! Dolores, facere. Iure, nostrum repellendus! Sapiente, reprehenderit doloribus culpa rem soluta repellendus id minus cum voluptate natus ea eveniet maiores, harum repellat. Obcaecati magnam quo totam impedit? Cupiditate nesciunt sunt at ratione mollitia tenetur id eveniet magni alias, praesentium perspiciatis doloremque magnam, assumenda quis aut reprehenderit temporibus modi eum asperiores eligendi. Mollitia possimus iure, soluta natus deleniti saepe maxime culpa necessitatibus, excepturi quaerat sed consequatur similique sapiente numquam. Voluptas quo autem distinctio nobis ullam labore impedit, corrupti architecto aliquam vel hic, deleniti asperiores ipsum facere commodi obcaecati, laudantium tempore velit possimus ad minima magnam dolor animi minus. Velit, dolorum magni? Omnis delectus dolore quo dolores natus odio. Omnis sit laudantium ut accusamus quidem eaque, totam maxime earum vero odio aliquid saepe illo temporibus quam perspiciatis ipsam fuga sunt, aliquam quis sapiente corporis sed! Illo dignissimos eius praesentium reprehenderit cum inventore, cupiditate recusandae minus expedita tenetur officia, blanditiis quasi cumque itaque ex incidunt asperiores debitis culpa eos totam sequi odio laudantium? Ad nesciunt quo sapiente? Eum, asperiores.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dicta quos unde tempore nisi similique aut sit cumque expedita nemo facere quas aliquid quam accusamus illum, ratione ad laudantium molestiae numquam officia natus porro! Dolores, facere. Iure, nostrum repellendus! Sapiente, reprehenderit doloribus culpa rem soluta repellendus id minus cum voluptate natus ea eveniet maiores, harum repellat. Obcaecati magnam quo totam impedit? Cupiditate nesciunt sunt at ratione mollitia tenetur id eveniet magni alias, praesentium perspiciatis doloremque magnam, assumenda quis aut reprehenderit temporibus modi eum asperiores eligendi. Mollitia possimus iure, soluta natus deleniti saepe maxime culpa necessitatibus, excepturi quaerat sed consequatur similique sapiente numquam. Voluptas quo autem distinctio nobis ullam labore impedit, corrupti architecto aliquam vel hic, deleniti asperiores ipsum facere commodi obcaecati, laudantium tempore velit possimus ad minima magnam dolor animi minus. Velit, dolorum magni? Omnis delectus dolore quo dolores natus odio. Omnis sit laudantium ut accusamus quidem eaque, totam maxime earum vero odio aliquid saepe illo temporibus quam perspiciatis ipsam fuga sunt, aliquam quis sapiente corporis sed! Illo dignissimos eius praesentium reprehenderit cum inventore, cupiditate recusandae minus expedita tenetur officia, blanditiis quasi cumque itaque ex incidunt asperiores debitis culpa eos totam sequi odio laudantium? Ad nesciunt quo sapiente? Eum, asperiores.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dicta quos unde tempore nisi similique aut sit cumque expedita nemo facere quas aliquid quam accusamus illum, ratione ad laudantium molestiae numquam officia natus porro! Dolores, facere. Iure, nostrum repellendus! Sapiente, reprehenderit doloribus culpa rem soluta repellendus id minus cum voluptate natus ea eveniet maiores, harum repellat. Obcaecati magnam quo totam impedit? Cupiditate nesciunt sunt at ratione mollitia tenetur id eveniet magni alias, praesentium perspiciatis doloremque magnam, assumenda quis aut reprehenderit temporibus modi eum asperiores eligendi. Mollitia possimus iure, soluta natus deleniti saepe maxime culpa necessitatibus, excepturi quaerat sed consequatur similique sapiente numquam. Voluptas quo autem distinctio nobis ullam labore impedit, corrupti architecto aliquam vel hic, deleniti asperiores ipsum facere commodi obcaecati, laudantium tempore velit possimus ad minima magnam dolor animi minus. Velit, dolorum magni? Omnis delectus dolore quo dolores natus odio. Omnis sit laudantium ut accusamus quidem eaque, totam maxime earum vero odio aliquid saepe illo temporibus quam perspiciatis ipsam fuga sunt, aliquam quis sapiente corporis sed! Illo dignissimos eius praesentium reprehenderit cum inventore, cupiditate recusandae minus expedita tenetur officia, blanditiis quasi cumque itaque ex incidunt asperiores debitis culpa eos totam sequi odio laudantium? Ad nesciunt quo sapiente? Eum, asperiores.
    </div>
  )
}

export default ClientIndexPage
