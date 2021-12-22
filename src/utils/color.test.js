import { pickColor } from "./color";

test("pickColor 함수 확인", () => {
    const initialLabels = [
        {
            'name':'Personal',
            'color':'white'
        },
        {
            'name':'Family',
            'color':'red'
        }, 
        {
            'name':'Business',
            'color': 'blue'
        }
    ]

    expect(pickColor(initialLabels)).toBe('orange');
})