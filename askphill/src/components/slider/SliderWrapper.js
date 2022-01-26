import Slide from './Slide'
import './SliderWrapper.scss'

const SliderWrapper = ({slideData}) => {

    const slides = slideData.map((s, idx) => 
        <Slide data={s} key={`slide_${s.title}_${s.idx}`} />
    )

    return (
        <div className="SliderWrapper">
            <div className="SliderWrapper-Inner">
                {slides}
            </div>
        </div>
    )
}

export default SliderWrapper