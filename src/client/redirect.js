export function redirect() {
    const id = this.id
    window.open(`/artistas/${id}`, '_blank');
}

