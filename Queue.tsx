class Queue {
  private array: any[] = [];

  constructor(firstElement?: any) {
    if (firstElement) {
      this.array.push(firstElement);
    }
  }

  size(): number {
    return this.array.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue empty");
    }
    return this.array[0];
  }

  poll() {
    if (this.isEmpty()) {
      throw new Error("Queue empty");
    }
    return this.array.shift();
  }

  offer(elem: any) {
    this.array.push(elem);
  }
}
