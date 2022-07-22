<script lang="typescript">
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";

    const url = window.location.pathname
    console.log(url)
</script>
<div class="topBar">
    <a onclick="history.back()"> ⮜ </a>
    MY SHOP
</div>

<div class="main">
    <Router {routes} />
</div>

<div class="bottomBar">

    <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/cart">Корзина</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</div>

<style @global>
    .main {
        background: #ffffff;
        text-align: center;
        margin: 120px auto;
    }
    .topBar {
        background: #ffffff;
        display: flex;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 20pt;
        font-weight: bold;
        box-shadow: 0 17px 36px -2px #bfbfbf;
    }

    .topBar a {
        color: purple;
        cursor: pointer;
        margin-right: 20px;
    }

    .bottomBar {
        background: #ffffff;
        display: flex;
        padding: 20px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 17px 36px -2px #bfbfbf;
    }

    .bottomBar ul li {
        display: inline-flex;
    }
</style>
