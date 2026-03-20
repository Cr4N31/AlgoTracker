# AlgoTracker

An academic tool built for DSA students to understand sorting and searching algorithms visually — in real time, step by step.

---

## The Problem

Reading about algorithms in textbooks or tracing through code isn't always enough to fully grasp what's happening. AlgoTracker was built for visual learners who need to *see* the data moving to truly understand the concept.

---

## What It Does

AlgoTracker collects array data values of different types — **Number** and **Text** — and sorts or searches them using real DSA algorithm implementations. Every operation is broken down into visible steps, timed, and plotted on a complexity graph so students can understand not just *what* happens but *why* certain algorithms perform better than others.

It also serves as a practical reference for developers who want to evaluate the best possible Big O Notation to use for a given data type or size.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| ReactJS | Interactive UI, state management, and component architecture |
| TailwindCSS | Styling — utility-first classes for responsive design |
| JavaScript | Core DSA logic and algorithm implementations |
| NodeJS | Package management |
| Recharts | Time complexity graph visuals |

---

## Algorithms

### Search
- **Linear Search** — O(n)
- **Binary Search** — O(log n) *(requires sorted array)*

### Sort
- **Selection Sort** — O(n²)
- **Insertion Sort** — O(n²)

---

## How It Works

### Search Flow
1. Choose data type (Number or Text)
2. Input the values your array will contain
3. Enter the value to search for
4. Choose between Linear Search or Binary Search
5. The result is returned with the index at which it was found and a step by step visualizer showing exactly how the algorithm navigated the array

> **Note:** Binary Search is disabled until the array has been sorted.

### Sort Flow
1. Choose data type (Number or Text)
2. Input the values to be sorted
3. Choose a sort algorithm
4. The sorted result is displayed alongside a step by step visualizer showing how each element was moved until the array was fully sorted

---

## Features

### Step Visualizer
Every sort and search operation is broken down into individual steps. Each step is colour coded to show:
- Which element is currently being checked
- What has been sorted or is in the sorted zone
- What is still unsorted or out of range

This gives students a frame by frame view of how the algorithm thinks.

### Time Complexity Calculator
Every operation is timed using `performance.now()` so students can see the actual milliseconds each algorithm takes to complete on their specific dataset — making the difference between O(n) and O(log n) tangible rather than theoretical.

### Big O Graph Visuals
Two line charts display the theoretical complexity curves for sort and search algorithms side by side:
- **Sort graph** — compares Selection Sort vs Insertion Sort growth rates
- **Search graph** — compares Linear Search O(n) vs Binary Search O(log n)

A marker sits on each curve at your current data size so you can see exactly where your dataset lands relative to the curve — and understand which algorithm is the better choice as data grows.

---

## Why I Built This

I'm a visual learner. When I started studying DSA, I could read the theory and follow the code but I couldn't *feel* how the algorithm moved through the data. Building AlgoTracker forced me to understand each algorithm deeply enough to extract its logic step by step — and the result is a tool I wish I had when I started.

---

## Getting Started
```bash
# Clone the repository
git clone https://github.com/Cr4N31/AlgoTracker.git

# Navigate into the project
cd algo-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Roadmap

- [ ] Bubble Sort implementation
- [ ] Search step visualizer improvements
- [ ] Space complexity tracking
- [ ] Algorithm comparison mode — run two algorithms side by side on the same data
- [ ] Mobile optimisation

---

## License
MIT
