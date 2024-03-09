//TODO: switch all hyperlinks into routes

function Footer() {
	return (
		<footer id='footer'>
			<div class='container footer-container'>
				<div class='row'>
					<div class='col-sm-6 col-md-4'>
						<div class='widget'>
							<h5 class='widget-title'>About us</h5>
							<p>
								Thank you for being a friend travelled down the road and back
								again your heart is true you are a pal.
							</p>
						</div>
					</div>

					<div class='col-sm-6 col-md-2'>
						<div class='widget'>
							<h5 class='widget-title'>Categories</h5>
							<ul>
								<li>
									<a href='../pages/about.html'>About</a>
								</li>
								<li>
									<a href='../pages/blog.html'>Blogs</a>
								</li>
								<li>
									<a href='/'>Gallery</a>
								</li>
								<li>
									<a href='../pages/contacts.html'>Contact</a>
								</li>
							</ul>
						</div>
					</div>

					<div class='col-sm-6 col-md-3'>
						<div class='widget'>
							<h5 class='widget-title'>Tags</h5>
							<div class='tag-cloud'>
								<a href='/'>Blog</a>
								<a href='/'>Brand</a>
								<a href='/'>Lifestyle</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='sub-footer'>
				<div class='container'>
					<div class='row'>
						<div class='col-sm-12'>
							<div class='widget footer-cp-text'>
								<p>&copy; Copyrights 2023. All rights reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
