import React, {useState, useEffect} from "react";
import style from "../Streams/Streams.module.scss";
import medTechSymbol from "../assets/stream-symbols/medtech_symbol.svg";
import financeSymbol from "../assets/stream-symbols/finance_symbol.svg";
import educationSymbol from "../assets/stream-symbols/education_symbol.svg";
import sustainabilitySymbol from "../assets/stream-symbols/sustainability_symbol.svg";
import memeSymbol from "../assets/stream-symbols/meme_symbol.svg";


export const Streams = () => {
    const [stream, setStream] = useState(null);

    const defaultDescription = <p>
        Hover on the button to learn more about the streams
    </p>;

    const [description, setDescription] = useState(defaultDescription)


    const onMouseOff = () => {
        setStream(null);
    }

    useEffect(()=> {
        let description;
        switch(stream) {
            case 'finance':
                description = <p>In a world that revolves around money, finance plays an integral part in an individual's daily life. The finance track is aimed at participants who would like to develop a final project that helps individuals ranging from those who are a part of the finance community or perhaps those trying to understand the world of finance.  What can you contribute to the world of finance?</p>
                setDescription(description);
                break;
            case 'medTech':
                description = <p>Rapidly evolving technology has made many of today's advancements possible, especially in the field of medical technology. The Medtech field is targeted towards participants who wish to create a project to contribute to this fast-growing medical technology field. The final project can be aimed to help those who actively work in the medical field, or perhaps those who require medical assistance. How do you wish to be a part of the medical technology evolution?</p>
                setDescription(description);
                break;
            case 'education':
                description = <p>Education plays a crucial role in enriching our lives, allowing us to gain knowledge or learn new skills. This track is geared towards participants who wish to improve the lives of others through education, with their final project being targeted towards helping educators or assisting those who wish to educate themselves. How do you want to shape the future of education?</p>
                setDescription(description);
                break;
            case 'sustainability':
                description = <p>Due to the rapid escalation of global warming, sustainability has become much more relevant today than ever before. The sustainability track is for those who wish to create a project to help fight against environmental deterioration and to combat climate change with the help of technology. How would you like to respond to the ongoing environmental crisis?</p>
                setDescription(description);
                break;
            case 'meme':
                description = <p>Not every project needs to save the world... sometimes, we just do projects for fun🙈

                    <br/>We're excited to see your creativity put to the test by developing the most meme-iest, outlandish product yet. If it makes the judges giggle, then it's a job well done.

                    <br/>Note: Meme submissions will not be considered in the award pool but may receive some special mentions!</p>
                setDescription(description);
                break;
            default:
                description = defaultDescription;
                setDescription(description);
                break;
        }
    }, [stream, defaultDescription])

    return(
        <div>
            <section id="streams" className={style.streams} >
            <div className={style.streamsTitle}>
                Streams_
            </div>
                <div className={style.streamsBlock}>
                    <div className={style.medTechButton} onMouseEnter={()=>setStream('medTech')} onMouseLeave={onMouseOff}>
                        <img src={medTechSymbol} alt={'MedTech Symbol'}/>
                        <div/>
                    </div>
                    <div className={style.financeButton} onMouseEnter={()=>setStream('finance')} onMouseLeave={onMouseOff}>
                        <img src={financeSymbol} alt={'Finance Symbol'}/>
                        <div/>
                    </div>
                    <div className={style.sustainabilityButton} onMouseEnter={()=>setStream('sustainability')} onMouseLeave={onMouseOff}>
                        <img src={sustainabilitySymbol} alt={'Sustainability Symbol'}/>
                        <div/>
                    </div>
                    <div className={style.educationButton} onMouseEnter={()=>setStream('education')} onMouseLeave={onMouseOff}>
                        <img src={educationSymbol} alt={'Education Symbol'}/>
                        <div/>
                    </div>
                    <div className={style.memeButton} onMouseEnter={()=>setStream('meme')} onMouseLeave={onMouseOff}>
                        <img src={memeSymbol} alt={'Meme Symbol'}/>
                        <div/>
                    </div>
                </div>
                <div className={style.streamDescription}>
                {description}
                </div>
            </section>
        </div>
    )
}