import React from "react";
import {toDateObj, enMonth} from '../utils/date'

export default function Calendar({date, changeHandler}){
    const dateObj = toDateObj(date);
    const year = dateObj.getFullYear();
    const month = enMonth(dateObj.getMonth());

    return (
        <div className='calendar-section' >
            <div className='calendar-container'>
                <div className='calendar-header'>
                    <div>
                        <p className='month'>{month}</p>
                        <p className='year'>{year}</p>
                    </div>
                    <div className='button-group'>
                        <button className='prev-btn'>
                        이전
                        </button>
                        <button className='today-btn'>
                        오늘
                        </button>
                        <button className='next-btn'>
                        다음
                        </button>
                    </div>
                </div>

                <table className='calendar'>
                    <tr className='row-day'>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                    </tr>
                    <tr>
                        <td className='prev-month'>26</td>
                        <td className='prev-month'>27</td>
                        <td className='prev-month'>28</td>
                        <td className='prev-month'>29</td>
                        <td className='prev-month'>30</td>
                        <td className='prev-month'>31</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>31</td>
                        <td className='next-month'>1</td>
                        <td className='next-month'>2</td>
                        <td className='next-month'>3</td>
                        <td className='next-month'>4</td>
                        <td className='next-month'>5</td>
                    </tr>
                </table>
                {/* <input type='datetime-local' onChange={e => changeHandler(e.target.value)}></input> */}
            </div>
        </div>
    )
}