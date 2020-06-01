import React from 'react'

function RequestForm() {
    return (
        <div>
            <div>
                <a className="RequestForm-text" >Задайте ваш вопрос</a>
                <form>
                    <label>
                        <input type="text" placeholder="Ваше имя" style={{ marginTop: 20, width: 150, marginRight: 15 }} />
                    </label>
                    <label>
                        <input type="email" placeholder="Email" style={{ width: 150, marginLeft: 15 }} />
                        <br />
                    </label>
                <label>
                    <input type="email" placeholder="Ваше сообщение" style={{ marginTop: 20, width: 340, height: 150 }} />
                </label>
                <br />
            <input style={{ marginTop: 20 }} type="submit" value="Отправить" />
                </form>
            </div >
        </div >
    )
}

export default RequestForm