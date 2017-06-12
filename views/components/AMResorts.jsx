//ES6
import React from 'react';

let data = [{
	id: "AMResortsHeader",
	TKIndex: "https://www.theknot.com",
	TKLogo: "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/TK_logo.png",
	AMIndex: "http://www.amresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-AM",
	AMLogoMobile: "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/amr_white@2x.png",
	AMLogoDesktop: "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/logo.png"
},
{
	AMResortsFooter:[
		{
			"ctpv": "[amresorts] Logo",
			"userDecisionArea": "Footer",
			"selection": "amresorts Logo",
			"url": "http://www.amresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-AM",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_am.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_am.png"
		},
		{
			"ctpv": "[zoetry] Logo",
			"userDecisionArea": "Footer",
			"selection": "zoetry Logo",
			"url": "http://www.zoetryresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-Zoetry",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_zo.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_zo.png"
		},
		{
			"ctpv": "[secrets] Logo",
			"userDecisionArea": "Footer",
			"selection": "secrets Logo",
			"url": "http://www.secretsresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-Secrets",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_se.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_se.png"
		},
		{
			"ctpv": "[Breathless] Logo",
			"userDecisionArea": "Footer",
			"selection": "Breathless Logo",
			"url": "http://www.breathlessresorts.com",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_br.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_br.png"
		},
		{
			"ctpv": "[dreams] Logo",
			"userDecisionArea": "Footer",
			"selection": "dreams Logo",
			"url": "http://www.dreamsresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-Dreams",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_dr.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_dr.png"
		},
		{
			"ctpv": "[now] Logo",
			"userDecisionArea": "Footer",
			"selection": "now Logo",
			"url": "http://www.nowresorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-Now",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_now.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_now.png"
		},
		{
			"ctpv": "[sunscape] Logo",
			"userDecisionArea": "Footer",
			"selection": "sunscape Logo",
			"url": "http://www.sunscaperesorts.com/?cm_sp=AMResortsMicrosite-_-TheKnot-_-Sunscape",
			"LogoMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/footer_sun.png",
			"LogoDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/footer_icons_sun.png"
		}
	]
},
{
	LandingTitle: {
			id: "LandingTitle",
			"descriptionMobile": "Ready to plan your destination wedding or honeymoon? Choose a destination and we'll show you the ultimate luxury resort that's perfect for you!",
			"descriptionDesktop": "Ready to plan your destination wedding or honeymoon?",
			"descriptionDesktop2": "Choose a destination and we'll show you the ultimate luxury resort that's perfect for you!",
			"TitleImgMobile": "//www.xoedge.com/sitelets/2017/AMResorts/images/mobile/Your Perfect Escape@2x.png",
			"TitleImgDesktop": "//www.xoedge.com/sitelets/2017/AMResorts/images/desktop/Your_Perfect_Escape.png"
		}
}];

class AMResortsHeader extends React.Component {
	constructor() {
		super()
	}
	render() {
		let AMR = this.props.data[0];
		return (
        	<header>
        		<div key={AMR.id} className="headLine">
        			<a href={AMR.TKIndex}>
        				<img id="tkLogo" className="desktop" src={AMR.TKLogo}/>
        			</a>
        			<a href={AMR.AMIndex}>
        				<img className={this.props.platform === "desktop" ? "desktop" : "mobile"} src={this.props.platform === "desktop" ? AMR.AMLogoDesktop : AMR.AMLogoMobile}/>
        			</a>
        		</div>
        	</header>
		);
	}
}

class AMResortsBody extends React.Component {
	constructor() {
		super()
	}
	render() {
		let LandingTitleContent = this.props.data[2].LandingTitle;
		let box = [];
		let container = [];
		if (this.props.platform === "desktop" && LandingTitleContent.descriptionDesktop2) {
			container.push (
				<div key={LandingTitleContent.id}>
					<p className="desktop">{LandingTitleContent.descriptionDesktop}</p>
					<p className="desktop">{LandingTitleContent.descriptionDesktop2}</p>
				</div>
			);
		} else {
			container.push (
				<p className="mobile" key={LandingTitleContent.id}>{LandingTitleContent.descriptionMobile}</p>
			);
		};
		box.push (
			<div id="LandingTitle" key={LandingTitleContent.id}>
				<img className={this.props.platform === "desktop" ? "desktop" : "mobile"} src={this.props.platform === "desktop" ? LandingTitleContent.TitleImgDesktop : LandingTitleContent.TitleImgMobile} />
				{container}
			</div>
		);		
		return (
			<div id="landing">
				<div id="main">
					{box}
				</div>
			</div>
		);
	}
}

class AMResortsFooter extends React.Component {
	constructor() {
		super()
	}
	render() {
		let platform = this.props.platform;
		let AMRFooter = this.props.data[1].AMResortsFooter
		let footerInfo = AMRFooter.map(function(footer) {
			let pf = platform === "desktop" ? "desktop" : "mobile";
			let	pfUrl = platform === "desktop" ? footer.LogoDesktop : footer.LogoMobile;
			return (
				<li key={footer.ctpv}>
					<a data-ctpv={footer.ctpv} data-userDecisionArea={footer.userDecisionArea} data-selection={footer.selection} href={footer.url} target="_blank">
						<img className={pf} src={pfUrl} />	
					</a>
				</li>
			);
		});
		return (
		        <footer>
		        	<div className="footLine">
		        		<ul>
		        			{footerInfo}
		        		</ul>
		        	</div>
		        </footer>
		);
	}
}

class AMResorts extends React.Component {
	constructor() {
		super()
		this.state = {
			platform : window.innerWidth>768 ? "desktop" : "mobile"
		}
	}
	componentWillMount() {
		this.setState({
			platform : window.innerWidth>768 ? "desktop" : "mobile"
		})
	}
	render() {
		return (
			<div className='sitelet_container'>
				<AMResortsHeader data={data} platform={this.state.platform}/>
				<AMResortsBody data={data} platform={this.state.platform}/>
				<AMResortsFooter data={data} platform={this.state.platform}/>
			</div>
		);
	}
}

export default AMResorts;