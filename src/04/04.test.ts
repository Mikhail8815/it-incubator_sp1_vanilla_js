test('Get only completed tasts', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sold', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]
    let complitedTask = tasks.filter(task => task.isDone)

    expect(complitedTask.length).toBe(2)
    expect(complitedTask[0].isDone).toBe(true)
    expect(complitedTask[0].id).toBe(2)
    expect(complitedTask[1].id).toBe(4)

     complitedTask = tasks.filter(task => task.title === 'Milk' || task.title === 'Sold' )

    expect(complitedTask.length).toBe(2)
    expect(complitedTask[0].title).toBe('Milk')
    expect(complitedTask[1].title).toBe('Sold')

})

export {}