// Counter Component Logic
export function counter() {
  return {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    get message() {
      return this.count >= 10 ? '🎉 Great job counting!' : 'Keep counting!';
    }
  }
}

// Dropdown Component Logic
export function dropdown() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    }
  }
}

// Tabs Component Logic
export function tabs() {
  return {
    selectedTab: 'tab1',
    tabs: ['tab1', 'tab2', 'tab3'],
    selectTab(tab) {
      this.selectedTab = tab;
    },
    isSelected(tab) {
      return this.selectedTab === tab;
    }
  }
}
