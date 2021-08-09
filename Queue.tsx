class Queue<T> {
  private array: T[] = [];

  constructor(firstElement?: T) {
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

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Queue empty");
    }
    return this.array[0];
  }

  poll(): T {
    if (this.isEmpty()) {
      throw new Error("Queue empty");
    }
    return this.array.shift();
  }

  offer(elem: T) {
    this.array.push(elem);
  }
}
