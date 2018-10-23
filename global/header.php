<html>
    <head>
        <link rel="shortcut icon" href="/global/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="stylesheet" href="/global/style.css">
        <link rel="stylesheet" href="page.css">
        <title><?php if ($title != null) {echo $title." - ";} ?>Jayden Irwin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#fff">
        <meta name="og:image" content="/global/opengraph.png">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="keywords" content="jayden irwin, LEGO, star wars, contract, developer, web, ontario, iOS, swift">
        <meta name="description" content="iOS developer and student based in Ontario.">
    </head>
    <body ontouchstart>
        <header>
            <nav class="content">
                <a <?php if ($segment == "Jayden Irwin") {echo 'class="selected"';} ?> href="/">Jayden Irwin</a>
                <a <?php if ($segment == "Work") {echo 'class="selected"';} ?> href="/work/">Work</a>
                <a <?php if ($segment == "Play") {echo 'class="selected"';} ?> href="/play/">Play</a>
                <a <?php if ($segment == "Contact") {echo 'class="selected"';} ?> href="/contact/">Contact</a>
            </nav>
        </header>