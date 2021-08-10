class Stack<T> {
  private stackArr: T[] = [];

  constructor(firstElement?: T) {
    if (firstElement) {
      this.stackArr.push(firstElement);
    }
  }

  size(): number {
    return this.stackArr.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stackArr[this.stackArr.length - 1];
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stackArr.pop();
  }

  push(element: T): void {
    this.stackArr.push(element);
  }

  search(element: T): number {
    return this.stackArr.indexOf(element);
  }
}
