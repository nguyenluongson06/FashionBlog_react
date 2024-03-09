//TODO: switch all hyperlinks into routes

function Sidebar() {
	return (
		<div className='col-sm-4 sidebar'>
			<div className='widget'>
				<h5 className='widget-title'>
					<span>Popular Posts</span>
				</h5>
				<div className='popular-posts'>
					<div className='rp-featured'>
						<div className='rp-media'>
							<a
								href='../pages/blog1.html'
								target='_top'>
								<img
									src='../images/blogimg/popular-head.png'
									alt='popular-head'
								/>
							</a>
							<span>1</span>
						</div>
						<div className='rp-category'>
							<a href='/'>Fashion Lite</a>
						</div>
						<h5>
							<a
								href='../pages/blog1.html'
								target='_top'>
								Got a dream and we just know now
							</a>
						</h5>
						<div className='seperator'>
							<span></span>
						</div>
					</div>

					<ol className='rp-items'>
						<li></li>
						<li>
							<a
								href='../pages/blog2.html'
								target='_top'
								className='link-post'>
								Now the world don't move to the beat of just one drum
							</a>
							<a
								href='/'
								className='link-cat'>
								FASHION
							</a>
						</li>
						<li>
							<a
								href='../pages/blog3.html'
								target='_top'
								className='link-post'>
								These are the voyages of the Starship Enterprise
							</a>
							<a
								href='/'
								className='link-cat'>
								FASHION
							</a>
						</li>
						<li>
							<a
								href='../pages/blog4.html'
								target='_top'
								className='link-post'>
								Then along come two they got nothin' but their jeans
							</a>
							<a
								href='/'
								className='link-cat'>
								FASHION
							</a>
						</li>
						<li>
							<a
								href='../pages/blog1.html'
								target='_top'
								className='link-post'>
								The movie star the professor and Mary Ann
							</a>
							<a
								href='/'
								className='link-cat'>
								FASHION
							</a>
						</li>
					</ol>
				</div>
			</div>

			<div className='widget widget-subscribe'>
				<div className='entry-subscribe'>
					<h2>Daily News about</h2>
					<h3>FASHION</h3>
					<div className='seperator'>
						<span></span>
					</div>
					<form>
						<input
							type='text'
							placeholder='Your E-mail *'
							required
						/>
						<button type='submit'>Subscribe</button>
					</form>
				</div>
			</div>

			<div className='widget'>
				<h5 className='widget-title'>
					<span>Categories</span>
				</h5>
				<ul>
					<li>
						<a
							href='../pages/blog.html'
							target='_top'>
							Blog Posts
						</a>
						<span>4</span>
					</li>
					<li>
						<a
							href='../pages/gallery.html'
							target='_top'>
							Gallery Posts
						</a>
						<span>2</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
