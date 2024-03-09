//TODO: switch all hyperlinks into routes

function Header() {
	return (
		<div className='wrapper'>
			<header
				id='header'
				className='menu-top-left'>
				<div className='topbar'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<nav className='main-nav'>
									<ul>
										<li>
											<a
												href='../index.html'
												target='_top'>
												Home
											</a>
										</li>
										<li>
											<a
												href='../pages/blog.html'
												target='_top'>
												Blogs
											</a>
										</li>
										<li>
											<a
												href='../pages/gallery.html'
												target='_top'>
												Gallery
											</a>
										</li>
										<li>
											<a
												href='../pages/about.html'
												target='_top'>
												About
											</a>
										</li>
										<li>
											<a
												href='../pages/contacts.html'
												target='_top'>
												Contact
											</a>
										</li>
									</ul>

									<a
										href='/'
										id='close-menu'>
										<i className='fa fa-close'></i>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='header-wrapper'>
								<a
									href='./'
									id='logo'
									title='logo'
									className='logo-image'
									style='background-image: url(../images/logo.svg);'>
									logo
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
