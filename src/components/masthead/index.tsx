import React, { useEffect } from "react";
import { NavbarAntispace, NavbarSpace } from "@components/navbar";

import styles from "./style.css";
import { Column } from "@components/column";
import { animated, config } from "react-spring";
import { useSpring } from "react-spring";
import { Logo } from "@components/logo";
import { MastheadPlanetBottom } from "./planet";

export const Masthead: React.FC = props => {
  const height = 550;

  const [{ offset }, set] = useSpring(() => ({
    offset: 0,
    config: {
      ...config.stiff
    }
  }));

  useEffect(() => {
    function listener() {
      set({
        offset: Math.min(height, window.scrollY)
      });
    }
    listener();
    window.addEventListener("scroll", listener, { passive: true });

    return () => window.removeEventListener("scroll", listener);
  }, []);

  const transform = offset.interpolate((value: number) => `translate3d(0, ${value * 0.15}px, 0)`);

  return (
    <>
      <NavbarAntispace />
      <section className={styles.masthead} style={{ height }}>
        <animated.div
          className={styles.image}
          style={{
            transform
          }}
        />
        <Column>
          <NavbarSpace />
          <Logo height={100} />
          <p className={styles.punchline}>{props.children}</p>
        </Column>
        <MastheadPlanetBottom />
      </section>
      <Column>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga consequuntur sed,
          debitis pariatur accusamus dolorem? Sit, pariatur vel. Accusantium, eum culpa. Quidem
          possimus, corrupti commodi omnis corporis perferendis accusamus? Porro molestias corrupti
          consectetur numquam consequatur doloremque deleniti pariatur repellendus ex maxime a vel
          eius dolores aspernatur blanditiis, minus accusamus est, nostrum natus nisi ea. Sunt
          consequatur commodi excepturi corrupti. Assumenda maxime voluptatum natus quisquam,
          distinctio rerum, sed laboriosam, deleniti minima dignissimos sit alias ducimus. Minus
          harum labore consectetur quasi voluptatibus maiores tempora inventore, ratione et
          repudiandae exercitationem quos voluptate! Labore mollitia aut omnis repellat voluptatem
          sint inventore cum, ut alias velit dignissimos? Et sint perferendis architecto possimus
          unde voluptate porro aliquam. Quibusdam laboriosam illo eum quasi vero, officiis nemo.
          Dolorem, omnis. Minus sunt quam maiores iure temporibus accusamus dolore, maxime ipsa
          cupiditate. Fugit, optio consequatur vel illum fugiat asperiores numquam sit neque enim,
          eos veritatis aliquid. Exercitationem, tempora ut. Placeat possimus perferendis, dicta
          voluptatem nam at quia illo laborum neque sunt suscipit nisi numquam voluptatibus quo?
          Beatae molestiae dicta quis ea, adipisci cupiditate est necessitatibus dignissimos
          nesciunt libero unde. Quam deserunt numquam perspiciatis at accusamus veritatis, facilis
          doloribus repellat! Aut non corporis fugit labore voluptatem culpa, natus assumenda dolor
          distinctio ad ea fuga quia quidem. Aliquid rerum velit quaerat! Magnam rem aliquid hic
          incidunt, vero facere corporis cupiditate cumque aut ipsa iure deleniti unde asperiores
          qui voluptate dolorum laborum vitae fugiat necessitatibus. Veniam at laudantium
          voluptatibus aliquam atque dolorem! Officiis, voluptatibus tenetur, delectus maxime nihil
          quibusdam distinctio nulla doloremque laudantium at voluptatem, voluptates incidunt ipsum
          itaque consectetur totam optio molestias cupiditate cumque quis fuga? Ea iure quaerat
          praesentium ducimus? Voluptatem, nulla perferendis. Sit ex ratione nostrum dolores, quasi
          velit similique culpa, dignissimos consequatur aperiam rem quam ipsum temporibus! Sequi
          voluptas possimus soluta, voluptatum unde magnam accusamus maxime quam hic. Tempore quas
          nihil necessitatibus modi quam temporibus hic maxime, earum quis culpa eligendi ipsam
          inventore illo voluptatum esse soluta quae beatae reprehenderit asperiores vel neque?
          Quasi aperiam ducimus officiis ratione. Corrupti magnam, dicta dolor mollitia, ipsum
          quibusdam eveniet architecto molestias est, laborum sequi minus nostrum quae veniam
          cupiditate atque praesentium. Molestias excepturi ab labore delectus asperiores illum sit
          eius neque. Aliquid harum tempora totam eveniet suscipit soluta in iusto, magni molestiae
          eos provident, libero obcaecati optio nesciunt ex non sunt nam delectus quidem, ad velit
          atque. Ad corporis minima delectus? Dignissimos minima repellendus velit illum earum
          rerum, expedita tempora asperiores officia quisquam non suscipit amet voluptatum dolorem
          delectus facilis doloremque quae reprehenderit, aperiam debitis laudantium, nemo voluptas
          accusantium. In, ducimus? Perspiciatis tempora asperiores ea eos porro ex nostrum dolores,
          deserunt modi quia odio, laudantium recusandae fugit saepe dignissimos quis, optio
          similique! Alias rem ipsa, optio temporibus animi vel ut officia?
        </p>
      </Column>
    </>
  );
};
