import axios from 'axios'
import toDo from '../models/toDo'

class ToDoService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  })

  async getToDoList() {
    const response = await this.http.get<toDo[]>('/todos')
    return response.data
  }

  async addToDo(title: string) {
    const response = await this.http.post<toDo>('/todos', { title })
    return response.data
  }

  async deleteToDo(id: number) {
    const response = await this.http.delete<toDo>('/todos/' + id)
    return response.data
  }
}
export default new ToDoService()
