import {LoaderWrapper } from '../styles/components/LoaderStyles'

const Loader = () => {
    return (
        <LoaderWrapper>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </LoaderWrapper>
    )
}

export default Loader