<template>
    <div class="wrapper">
        <header class="header">
            <div class="container header__wrap">
                <div class="header__wrap__top">

                    <div class="header__wrap__top__item itemOne">
                        <img src="../assets/img/NavigationgPS.svg" alt="">
                        <span>Kyiv, nizhniy val,37</span>
                    </div>
                    <div class="header__wrap__top__item itemTwo">
                        <img src="../assets/img/Phone.svg" alt="">
                        <span>+38 063 843 34 71</span>
                    </div>


                    <div class="header__wrap__top__logo item--logo">
                        <RouterLink to="/">
                            <img src="../assets/img/logo.svg" alt="">
                        </RouterLink>

                    </div>
                    <div class="header__wrap__top__item item--increase">
                        <img src="../assets/img/Loop.svg" alt="">
                        <span>Search</span>
                    </div>
                    <div class="header__wrap__top__item item--burgerBasket">
                        <img src="../assets/img/Heart.svg" alt="">
                        <div class="burger" @click="addClass()">
                            <img src="../assets/img/Bag.svg" class="basketImg" alt="">
                            <div class="burger__wrap">
                                <div class="basket">
                                    <div class="basket__button">
                                        <img src="../assets/img/burgerBasket/Basketbutton.svg" alt="image">
                                    </div>

                                    <h3>Cart</h3>

                                    <div class="basket__products">
                                        <article class="basket__products__card">
                                            <img class="basketPng" src="../assets/img/cart2.svg"
                                                alt="image">
                                            <div class="basket__products__card__content">
                                                <h4>Bomber Gone Crazy
                                                    </h4>
                                                <p>S ??? M</p>
                                                <span>2 499 UAH</span>
                                                <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                            </div>
                                        </article>
                                        <article class="basket__products__card">
                                            <img class="basketPng" src="../assets/img/cart1.svg"
                                                alt="image">
                                            <div class="basket__products__card__content">
                                                <h4>Dress t-shirt Aquarium</h4>
                                                <p>S ??? M</p>
                                                <span>899 UAH</span>
                                                <img src="../assets/img/burgerBasket/deleteBasket.svg" alt="image">
                                            </div>
                                        </article>
                                    </div>

                                    <div class="basket__sumOrder">
                                        <span>Sum of order: . . . . . . </span>
                                        <span class="sum">3 398 UAH</span>
                                    </div>

                                    <div class="basket__bottomButton">
                                        <RouterLink to="/order">Make order now</RouterLink>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <nav class="header__wrap__bottom">
                    <a href="#">
                        <span>Novelties</span>
                    </a>
                    <a href="#">
                        <span>Dresses</span>
                    </a>
                    <a href="#">
                        <span>Outerwear</span>
                    </a>

                    <a href="#">
                        <span>Jackets</span>
                    </a>
                    <a href="#">
                        <span>Accessories</span>
                    </a>
                    <a href="#">
                        <span>Suits</span>
                    </a>
                    <RouterLink to="/BoorivaPage">
                        <span>#Boorivagirls</span>
                    </RouterLink>


                </nav>
            </div>
        </header>

        <main class="main">
            <section class="heading">
                <div class="container heading__wrap">
                    <nav>
                        <span>Home</span>
                        <img src="../assets/img/Arrownavcategory.svg" alt="">
                        <span class="pink">Exchange and return</span>
                    </nav>

                    <div class="head">
                        <h1>Exchange and return</h1>
                        <div class="head__absoluteText">
                            <span>Exchange and return policy</span>
                            <img src="../assets/img/BlackLineEeEeEEe.svg" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section class="exchangeItems">
                <div class="container exchangeItems__wrap">
                    <div class="exchangeItems__wrap__left">
                        <div class="exchangeItems__wrap__item item--one">
                            <img src="../assets/img/??????????????1.png" alt="">
                            <p>You can easily exchange or return the item within 14 days after purchase, if the item is not
                                 was in a sock and was not erased. To do this, contact us in any convenient way.</p>
                        </div>
                        <div class="exchangeItems__wrap__item item--two">
                            <img src="../assets/img/??????????????2.png" alt="">
                            <p>Items that you send to us, we pick up from the post office 2 times a week.</p>
                        </div>
                    </div>

                    <div class="exchangeItems__wrap__right">
                        <div class="exchangeItems__wrap__item item--three">
                            <img src="../assets/img/??????????????3.png" alt="">
                            <p>When exchanging, we send the item on the same or the next day after we took the item from the post office.</p>
                        </div>
                        <div class="exchangeItems__wrap__item item--four">
                            <img src="../assets/img/??????????????4.png" alt="">
                            <p>When returning, the money is returned within 5 working days after the item has been picked up from the post office and the details for the return have been received.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section class="instagram">
                <div class="container instagram__wrap">
                    <div class="instagram__wrap__left">
                        <h3>Instagram</h3>
                        <span class="often">We are in ecstasy when you tag us)</span>
                        <span class="miniText--two">Please tag more often</span>
                        <div class="instagram__wrap__left__images">
                            <img src="../assets/img/instagrambigleft.svg" alt="image">
                            <img src="../assets/img/instagramleft.svg" alt="image">
                        </div>
                    </div>
                    <div class="instagram__wrap__center">

                    </div>

                    <div class="instagram__wrap__right">
                        <div class="instagram__wrap__right__images">
                            <img src="../assets/img/instagramright.svg" alt="image">
                            <img src="../assets/img/instagrambigright.svg" alt="image">
                        </div>

                        <h3>#boorivagirls </h3>
                        <p>Tag to join our group.</p>

                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="container footer__wrap">
                <div class="footer__wrap__item item--logo">
                    <img src="../assets/img/FooterLogo.png" alt="">
                </div>
                <div class="footer__wrap__item">
                    <span>Information</span>
                    <ul>

                        <li>
                            <RouterLink to="/contacts">Contacts</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/systemLoyalty">System of loyalty</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/exchange">Exchange and return</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/exchange">Shipping and payment</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--address">
                    <span>Our address</span>
                    <ul>
                        <li>Kyiv,nizhniy val,37</li>
                        <li>Mon ??? Sun: 11:00/21:00</li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--social">
                    <span>Social networks</span>
                    <ul>
                        <li class="images">
                            <img src="../assets/img/InstagramFooter.svg" alt="image">
                            <img src="../assets/img/FacebookFOtter.svg" alt="image">
                        </li>
                    </ul>
                </div>
                <div class="footer__wrap__item item--feedback">
                    <img src="../assets/img/Ivanka.svg" alt="">

                    <div class="footer__wrap__item__text">
                        <p>It is important for us to know what you think about us. Just write to me!</p>

                        <p>Write to Ivanka</p>
                    </div>

                </div>

            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name:'BurgerBaskett',
        methods: {
            addClass() {
                this.$el.querySelector('.basket').classList.toggle('visibility');
            }
        }
    }
</script>