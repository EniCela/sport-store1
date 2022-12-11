<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPORT Store</title>
    <link rel="stylesheet" href="ecommercecss.css?v=1.7">

    <!-- <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css" integrity="sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!--carousel -------------------------------------------->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  </head>

<body>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="img/logosport.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="index.php?go=home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.php?go=productCard">Products</a>
              </li>
              <li class="nav-item">
                <div class="eni">
                <a class="nav-link" href="index.php?go=myproduct">My product</a>
                </div>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

        <?php

        if(isset($_GET['go'])) { $go = $_GET['go'];} else { ($go = 'home');}

        switch($go){

            case 'home': include('home.html'); break;
            case 'productCard': include('productCard.html'); break;
            case 'myproduct':include('myproduct.html'); break;

            default: include('home.html');
        }


        ?>

      <footer id="footer">

        <section class="section2">
            <p> <b> CONTACT INFORMATION </b></p>
             <p><i class="fa fa-map-marker" aria-hidden="true"></i>   Rruga Gjergj Legisi, Tirana, Albania</p> 
            <p> <i class="fa fa-envelope" aria-hidden="true"></i>  support@Sportstore.com.al</p>
            <p><i class="fa fa-phone" aria-hidden="true"></i>355-65841258</p>
        </section>

        <section class="section3">
          <p> <b> OUR COMPANY </b></p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
          <p>Cookies Policy</p>
          <p>Online Support</p>
        </section>

        <section class="section4">
          <p><b>BILLING INFORMATION</b></p>
          <p><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Payment Methods</p>
          <p><i class="fa fa-shopping-bag" aria-hidden="true"></i>  Shipping Methods</p>
        </section>

        <section class="section5">
          <p><b>OPENING TIME</b></p>
          <p><i class="fa fa-clock-o" aria-hidden="true"></i>  Every day of the week Open 8:00 AM - 22:00 PM</p>
          <p><b>Follow Us</b></p>
          <p><a href="https://www.instagram.com/intersport_albania/"><i id="social" class="fa fa-facebook-square" aria-hidden="true"></i></a></i> <a href="https://www.instagram.com/intersport_albania/"><i id="social" class="fa fa-instagram" aria-hidden="true"></i></a>  <a href=""><i id="social" class="fa fa-linkedin-square" aria-hidden="true"></i></a></i></p>
        </section>

    </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js" integrity="sha512-vyRAVI0IEm6LI/fVSv/Wq/d0KUfrg3hJq2Qz5FlfER69sf3ZHlOrsLriNm49FxnpUGmhx+TaJKwJ+ByTLKT+Yg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>