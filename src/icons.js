/***********************************************************
 * Icons
***********************************************************/

const Gradient = (props) => (
	<defs>
		<linearGradient {...props} gradientTransform="rotate(90)">
			<stop offset="0%" stopColor="#48dbfb" stopOpacity="1" />
			<stop offset="100%" stopColor="#48dbfb" stopOpacity="1" />
		</linearGradient>
	</defs>
)

let iconNum = 1
const iconID = () => "bokez-icon-" + iconNum++

export const IconClassicBlock = () => {

    const id = iconID()

	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <Gradient id={ id } /> 
            <path fill={ `url(#${id})` } d="M24 3h-12v-2h12v2zm0 3h-12v2h12v-2zm0 5h-12v2h12v-2zm0 5h-12v2h12v-2zm0 5h-12v2h12v-2zm-14-20h-10v10h10v-10zm0 12h-10v10h10v-10z"/>
        </svg>
    )   
}

export const IconGridBlock = () => {

    const id = iconID()

	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <Gradient id={ id } /> 
            <path fill={ `url(#${id})` } d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z"/>
        </svg>
    )   
}

export const IconCheckChecked = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-5.541 8.409l-1.422-1.409-7.021 7.183-3.08-2.937-1.395 1.435 4.5 4.319 8.418-8.591z"/>
        </svg>
    )   
}

export const IconCheckUnchecked = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z"/>
        </svg>
    )   
}

export const IconDesktop = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M2 0c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-15c0-1.104-.896-2-2-2h-20zm20 14h-20v-12h20v12zm-6.599 7c0 1.6 1.744 2.625 2.599 3h-12c.938-.333 2.599-1.317 2.599-3h6.802z"/>
        </svg>
    )   
}

export const IconMobile = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M5 3.461c0 .978.001 16.224 0 17.213-.002 2.214 3.508 3.326 7.014 3.326 3.495 0 6.986-1.105 6.986-3.326v-17.213c0-2.348-3.371-3.461-6.805-3.461-3.563 0-7.195 1.199-7.195 3.461zm7-1.461c.276 0 .5.223.5.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.277.224-.5.5-.5zm0 20c-.552 0-1-.448-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .552-.448 1-1 1zm5-3h-10v-15h10v15z"/>
        </svg>
    )   
}

export const IconTablet = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M24 5c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/>
        </svg>
    )   
}

export const IconVideoFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
    )   
}

export const IconAudioFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm11.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z"/>
        </svg>
    )   
}

export const IconGalleryFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm8.8-5v14h-20v-3h-4v-15h21v4h3zm-20 9v-9h15v-2h-17v11h2zm18-7h-16v10h16v-10z"/>
        </svg>
    )   
}

export const IconImageFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/>
        </svg>
    )   
}

export const IconLinkFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
        </svg>
    )   
}

export const IconChatFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 11.5c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"/>
        </svg>
    )   
}

export const IconQuoteFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
        </svg>
    )   
}

export const IconStandardFormat = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/>
        </svg>
    )   
}

export const IconPremium = () => {
	return (
        <svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g>
                <path d="M244.977,222.608c-3.111-2.449-6.849-3.674-11.217-3.674H220.65v28.401h13.109c4.368,0,8.106-1.221,11.217-3.676   c3.11-2.445,4.67-5.987,4.67-10.624C249.646,228.537,248.086,225.058,244.977,222.608z"/><path d="M361.063,218.737c-9.93,0-18.569,3.675-25.916,11.022c-7.35,7.346-11.024,16.714-11.024,28.101   c0,11.521,3.675,20.954,11.024,28.302c7.347,7.349,15.986,11.022,25.916,11.022c9.933,0,18.601-3.674,26.021-11.022   c7.412-7.348,11.119-16.781,11.119-28.302c0-11.387-3.707-20.755-11.119-28.101C379.664,222.412,370.996,218.737,361.063,218.737z"/><path d="M452.486,107.223L278.121,6.553c-15.133-8.737-39.896-8.737-55.029,0L48.726,107.223   c-15.132,8.737-27.514,30.183-27.514,47.657v201.339c0,17.475,12.382,38.921,27.514,47.657l174.366,100.67   c15.133,8.737,39.896,8.737,55.029,0l174.365-100.67C467.618,395.14,480,373.693,480,356.219V154.879   C480,137.405,467.618,115.959,452.486,107.223z M165.042,260.939c-7.942,7.085-17.611,10.625-29,10.625h-16.878v49.852H89.569   V194.705h46.474c11.389,0,21.057,3.508,29,10.525c7.943,7.021,11.914,16.287,11.914,27.805S172.985,253.858,165.042,260.939z    M265.732,321.416l-34.16-49.852H220.65v49.852h-29.595V194.705h47.269c11.253,0,20.885,3.508,28.898,10.525   c8.01,7.021,12.016,16.287,12.016,27.805c0,7.149-1.856,13.574-5.561,19.266c-3.71,5.695-8.344,9.864-13.904,12.513l40.319,56.602   H265.732z M409.027,305.926c-13.572,12.31-29.559,18.471-47.964,18.471c-18.271,0-34.193-6.161-47.762-18.471   c-13.577-12.315-20.36-28.336-20.36-48.065c0-19.462,6.783-35.353,20.36-47.666c13.568-12.312,29.49-18.469,47.762-18.469   c11.785,0,22.841,2.647,33.169,7.944c10.327,5.296,18.767,13.076,25.322,23.335c6.555,10.262,9.83,21.882,9.83,34.855   C429.385,277.59,422.598,293.61,409.027,305.926z"/><path d="M142.897,222.608c-3.111-2.449-6.854-3.674-11.223-3.674h-12.51v28.401h12.51c4.369,0,8.112-1.221,11.223-3.676   c3.107-2.445,4.667-5.987,4.667-10.624C147.564,228.537,146.004,225.058,142.897,222.608z"/>
            </g>
        </svg>
    )   
}
