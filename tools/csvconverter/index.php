<html>
	<head>
		<link rel="stylesheet" href="/global/style.css">
		<link rel="stylesheet" href="page.css">
		<title>CSV Converter - Tools</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#fff">
        <meta name="og:image" content="/global/opengraph.png">
        <meta name="apple-mobile-web-app-capable" content="yes">
	</head>
	<body>
		<header>
			<nav>
				<a href="/tools/">Tools</a>
			</nav>
		</header>
		<section>
			<section class="content">
				<h1>CSV Converter</h1>
				<p>Convert each row of a CSV to a custom format.</p>
				<h3>CSV Input</h3>
				<textarea id="input" name="input" rows="20" placeholder="Steve,dog" onchange="convert()"></textarea> 
				<h3>Row Output Format</h3>
				<input type="text" id="exp" name="exp" value='<event-cell date="{0} {1} {2} 2017" event-title="{3}"></event-cell>' placeholder="{0} has a {1}." onchange="convert()">
				<h3>Custom Output</h3>
				<textarea id="output" name="output" rows="20" placeholder="Steve has a dog."></textarea>
				<span id="warnings" title="Some lines were missing a component."></span>
				<span id="errors" title="Some lines were removed for missing too many components."></span>
			</section>
		</section>
		<script src="script.js"></script>
	</body>
</html>