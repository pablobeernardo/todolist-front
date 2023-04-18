export default async function DeleteTaskService(id: number) {
    const result = await fetch(`http://localhost:3010/task/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }

        }

    );


    return result.status;
}