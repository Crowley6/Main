import './AboutP.css';

const AboutP = () => {
    return (
        <div>
            <div>
                <div className='About1'>
                    <div className="AboutContent">
                        <div className='Ard'>Arduino</div>
                        <div className='ArdOpisanie'>это комбинация аппаратной и программной частей для простой разработки электроники.</div>
                    </div>
                    <div className="claxes"></div>
                </div>
                <div className='AboutBack'>
                    <div className='AboutBackInfo'>
                        <div className='AboutBackInfoI1'>
                            Что такое <span>Arduino</span> и для чего его можно использовать
                        </div>
                        <div className='AboutBackInfoI2'>
                            Arduino - это электронная платформа с открытым исходным кодом, основанная на простом в использовании оборудовании и программном обеспечении.
                            Платы Arduino способны считывать входные сигналы - индикатор на датчике, превращать их в выходные данные - активируя двигатель, включая светодиод.
                            Вы можете указать своей плате, что делать, отправив набор инструкций на микроконтроллер на плате.
                            Для этого вы используете язык программирования и программное обеспечение Arduino (IDE), основанное на обработке.
                        </div>
                    </div>
                    <div className='AboutBackInfo2'></div>
                </div>
                <div className='AboutPlatform'>
                    <div className='PlatformInfo'>
                        <div className='PlatformInfo1'>Почему Arduino?</div>
                        <div className='PlatformInfo2'>Arduino также упрощает процесс работы с микроконтроллерами, но дает некоторое преимущество преподавателям, студентам и заинтересованным любителям по сравнению с другими системами:</div>
                    </div>
                    <div className='PlatformElipse'>
                        <div>
                            <div className='PlatformElipseImg PEI1' src={''}></div>
                            <div className='PlatformElipseIext'>Недорогие</div>
                            <div className='PlatformElipseIext2'>платы относительно недороги по сравнению с другими платформами микроконтроллеров.</div>
                        </div>
                        <div>
                            <div className='PlatformElipseImg PEI2' src={''}></div>
                            <div className='PlatformElipseIext'>Кроссплатформенность</div>
                            <div className='PlatformElipseIext2'>программное обеспечение Arduino (IDE) работает в операционных системах Windows, OSX и Linux.</div>
                        </div>
                        <div>
                            <div className='PlatformElipseImg PEI3' src={''}></div>
                            <div className='PlatformElipseIext'>Простота</div>
                            <div className='PlatformElipseIext2'>программное обеспечение простое в использовании для начинающих, но гибкое для продвинутых пользователей</div>
                        </div>
                        <div>
                            <div className='PlatformElipseImg PEI4' src={''}></div>
                            <div className='PlatformElipseIext'>Исходный код</div>
                            <div className='PlatformElipseIext2'>Язык может быть расширен с помощью библиотек C ++. Для тех кто желает разобраться в технических деталях, могут перейти на язык программирования AVRC</div>
                        </div>
                        <div>
                            <div className='PlatformElipseImg PEI5' src={''}></div>
                            <div className='PlatformElipseIext'>Модули</div>
                            <div className='PlatformElipseIext2'>Открытый исходный код и расширяемое оборудование - схемы плат  по лицензии, поэтому опытные разработчики схем могут создавать свою версию, расширяя и улучшая ее.</div>
                        </div>
                        <div className='AboutPlatformFooter'></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default AboutP