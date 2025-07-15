document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const contentArea = document.getElementById('content-area');

    // Store content for each data structure
    const dataStructuresContent = {
        'arrays': {
            intro: `
                <h2>Arrays</h2>
                <p>An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).</p>
                <p>Arrays are one of the simplest and most widely used data structures. They are static in size in many languages (like C/C++/Java), meaning their size is fixed once declared, but dynamic in others (like JavaScript).</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>Fixed Size (often):</strong> In many languages, arrays have a fixed size defined at creation.</li>
                    <li><strong>Contiguous Memory:</strong> Elements are stored sequentially in memory, allowing for efficient random access.</li>
                    <li><strong>Indexed Access:</strong> Elements are accessed using an index (usually starting from 0).</li>
                    <li><strong>Homogeneous Data:</strong> Typically store elements of the same data type.</li>
                </ul>
                <h3>Common Operations:</h3>
                <ul>
                    <li><strong>Access:</strong> Retrieving an element by its index (O(1) time complexity).</li>
                    <li><strong>Insertion/Deletion:</strong> Adding or removing elements can be expensive (O(n) in worst case) as it may require shifting other elements.</li>
                    <li><strong>Sorting:</strong> Arranging elements in a specific order (e.g., ascending, descending).</li>
                    <li><strong>Searching:</strong> Finding the position of a specific element.</li>
                </ul>
            `,
            operations: `
                <h3>Array Operations</h3>
                <div class="operations-section">
                    <div class="operation-selector">
                        <button data-op="init-array" class="active">Initialize/Clear</button>
                        <button data-op="sort-array">Sorting</button>
                        <button data-op="search-array">Search</button>
                        <button data-op="insert-array">Insert</button>
                        <button data-op="delete-array">Delete</button>
                    </div>

                    <div id="init-array-content" class="operation-content active">
                        <h4>Initialize Array:</h4>
                        <label for="arrayInput">Enter comma-separated numbers for the array (e.g., 5,2,8,1,9):</label>
                        <input type="text" id="arrayInput" placeholder="e.g., 5,2,8,1,9">
                        <button class="action-button" onclick="createArray()">Create Array</button>
                        <button class="action-button" onclick="clearArray()">Clear Array</button>
                    </div>

                    <div id="sort-array-content" class="operation-content">
                        <h4>Sorting Algorithms:</h4>
                        <button class="action-button" onclick="sortArray('bubble')">Bubble Sort</button>
                        <button class="action-button" onclick="sortArray('selection')">Selection Sort</button>
                        <button class="action-button" onclick="sortArray('insertion')">Insertion Sort</button>
                        <button class="action-button" onclick="sortArray('quick')">Quick Sort</button>
                        <button class="action-button" onclick="sortArray('merge')">Merge Sort</button>
                    </div>

                    <div id="search-array-content" class="operation-content">
                        <h4>Search Operation:</h4>
                        <label for="arraySearchInput">Search for a number:</label>
                        <input type="number" id="arraySearchInput" placeholder="e.g., 8">
                        <button class="action-button" onclick="searchArray()">Search</button>
                    </div>

                    <div id="insert-array-content" class="operation-content">
                        <h4>Insert Operation:</h4>
                        <label for="arrayInsertValue">Insert value:</label>
                        <input type="number" id="arrayInsertValue" placeholder="Value">
                        <label for="arrayInsertIndex">At index (optional):</label>
                        <input type="number" id="arrayInsertIndex" placeholder="Index">
                        <button class="action-button" onclick="insertIntoArray()">Insert</button>
                    </div>

                    <div id="delete-array-content" class="operation-content">
                        <h4>Delete Operation:</h4>
                        <label for="arrayDeleteValue">Delete value:</label>
                        <input type="number" id="arrayDeleteValue" placeholder="Value">
                        <label for="arrayDeleteIndex">At index (optional):</label>
                        <input type="number" id="arrayDeleteIndex" placeholder="Index">
                        <button class="action-button" onclick="deleteFromArray()">Delete</button>
                    </div>

                    <div class="result" id="arrayResult"></div>
                    <div class="error" id="arrayError"></div>
                    <div class="visualization-container" id="arrayVisualization"></div>
                </div>
            `
        },
        'linked-lists': {
            intro: `
                <h2>Linked Lists</h2>
                <p>A linked list is a linear data structure, like an array, but elements are not stored at contiguous memory locations. Instead, elements are linked using pointers or references. Each element (called a node) consists of two parts: data and a pointer to the next node in the sequence.</p>
                <p>Linked lists are particularly useful when the number of elements is unknown or dynamic, as they can grow or shrink efficiently without requiring memory reallocations of the entire structure.</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>Dynamic Size:</strong> Can grow or shrink as needed, efficiently adding or removing nodes.</li>
                    <li><strong>Non-contiguous Memory:</strong> Nodes can be stored anywhere in memory, connected by pointers.</li>
                    <li><strong>No Random Access:</strong> To access an element, you must traverse the list from the beginning (or end for doubly linked lists).</li>
                    <li><strong>Insertion/Deletion:</strong> Generally efficient (O(1)) at specific points (e.g., head) once the insertion/deletion point is found. Finding the point can be O(n).</li>
                </ul>
                <h3>Common Operations:</h3>
                <ul>
                    <li><strong>Insertion:</strong> Adding a node (e.g., at head, tail, or specific position).</li>
                    <li><strong>Deletion:</strong> Removing a node.</li>
                    <li><strong>Search:</strong> Finding a node with a specific value.</li>
                    <li><strong>Traversal:</strong> Visiting each node in the list.</li>
                </ul>
            `,
            operations: `
                <h3>Linked List Operations</h3>
                <div class="operations-section">
                    <div class="operation-selector">
                        <button data-op="init-list" class="active">Initialize/Clear</button>
                        <button data-op="insert-list">Insert</button>
                        <button data-op="delete-list">Delete</button>
                        <button data-op="search-list">Search</button>
                        <button data-op="traverse-list">Traverse</button>
                    </div>

                    <div id="init-list-content" class="operation-content active">
                        <h4>Initialize Linked List:</h4>
                        <label for="listInput">Enter comma-separated numbers for the list (e.g., 10,20,30):</label>
                        <input type="text" id="listInput" placeholder="e.g., 10,20,30">
                        <button class="action-button" onclick="createList()">Create List</button>
                        <button class="action-button" onclick="clearList()">Clear List</button>
                    </div>

                    <div id="insert-list-content" class="operation-content">
                        <h4>Insert Node:</h4>
                        <label for="listInsertValue">Value to insert:</label>
                        <input type="number" id="listInsertValue" placeholder="Value">
                        <label for="listInsertPosition">At position (e.g., 0 for head, -1 for tail, or index):</label>
                        <input type="number" id="listInsertPosition" placeholder="Position (e.g., 0)">
                        <button class="action-button" onclick="insertIntoList()">Insert Node</button>
                    </div>

                    <div id="delete-list-content" class="operation-content">
                        <h4>Delete Node:</h4>
                        <label for="listDeleteValue">Value to delete (optional):</label>
                        <input type="number" id="listDeleteValue" placeholder="Value">
                        <label for="listDeletePosition">At position (optional, e.g., 0 for head):</label>
                        <input type="number" id="listDeletePosition" placeholder="Position">
                        <button class="action-button" onclick="deleteFromList()">Delete Node</button>
                    </div>

                    <div id="search-list-content" class="operation-content">
                        <h4>Search Node:</h4>
                        <label for="listSearchValue">Value to search:</label>
                        <input type="number" id="listSearchValue" placeholder="Value">
                        <button class="action-button" onclick="searchList()">Search</button>
                    </div>

                    <div id="traverse-list-content" class="operation-content">
                        <h4>Traverse List:</h4>
                        <button class="action-button" onclick="traverseList()">Start Traversal</button>
                    </div>

                    <div class="result" id="listResult"></div>
                    <div class="error" id="listError"></div>
                    <div class="visualization-container" id="listVisualization"></div>
                </div>
            `
        },
        'stacks': {
            intro: `
                <h2>Stacks</h2>
                <p>A stack is a linear data structure that follows a particular order in which operations are performed. The order may be LIFO (Last In, First Out) or FILO (First In, Last Out). It's analogous to a stack of plates; you can only add a plate to the top, and you can only remove the topmost plate.</p>
                <p>Stacks are widely used in many programming paradigms, including function call management (call stack), expression evaluation, and undo/redo functionality.</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>LIFO/FILO Principle:</strong> The last element added is the first one to be removed.</li>
                    <li><strong>Single-ended Operations:</strong> All insertions and deletions happen from one end, called the "top".</li>
                    <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
                    <li><strong>Pop:</strong> Removes the topmost element from the stack.</li>
                    <li><strong>Peek/Top:</strong> Returns the topmost element without removing it.</li>
                </ul>
                <h3>Common Operations:</h3>
                <ul>
                    <li><strong>Push:</strong> Add an element to the top.</li>
                    <li><strong>Pop:</strong> Remove and return the top element.</li>
                    <li><strong>Peek/Top:</strong> Get the top element without removal.</li>
                    <li><strong>isEmpty:</strong> Check if the stack is empty.</li>
                    <li><strong>size:</strong> Get the number of elements in the stack.</li>
                </ul>
            `,
            operations: `
                <h3>Stack Operations</h3>
                <div class="operations-section">
                    <div class="operation-selector">
                        <button data-op="init-stack" class="active">Initialize/Clear</button>
                        <button data-op="push-stack">Push</button>
                        <button data-op="pop-stack">Pop</button>
                        <button data-op="peek-stack">Peek</button>
                        <button data-op="is-empty-stack">isEmpty</button>
                    </div>

                    <div id="init-stack-content" class="operation-content active">
                        <h4>Initialize Stack:</h4>
                        <label for="stackInput">Enter comma-separated numbers for the initial stack (e.g., 1,2,3):</label>
                        <input type="text" id="stackInput" placeholder="e.g., 1,2,3">
                        <button class="action-button" onclick="createStack()">Create Stack</button>
                        <button class="action-button" onclick="clearStack()">Clear Stack</button>
                    </div>

                    <div id="push-stack-content" class="operation-content">
                        <h4>Push Operation:</h4>
                        <label for="stackPushValue">Value to push:</label>
                        <input type="number" id="stackPushValue" placeholder="Value">
                        <button class="action-button" onclick="pushStack()">Push</button>
                    </div>

                    <div id="pop-stack-content" class="operation-content">
                        <h4>Pop Operation:</h4>
                        <button class="action-button" onclick="popStack()">Pop</button>
                    </div>

                    <div id="peek-stack-content" class="operation-content">
                        <h4>Peek Operation:</h4>
                        <button class="action-button" onclick="peekStack()">Peek</button>
                    </div>

                    <div id="is-empty-stack-content" class="operation-content">
                        <h4>Check if Empty:</h4>
                        <button class="action-button" onclick="isStackEmpty()">isEmpty?</button>
                    </div>

                    <div class="result" id="stackResult"></div>
                    <div class="error" id="stackError"></div>
                    <div class="visualization-container" id="stackVisualization"></div>
                </div>
            `
        },
        'queues': {
            intro: `
                <h2>Queues</h2>
                <p>A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the element that was added first is the one that will be removed first, much like people waiting in a line or queue.</p>
                <p>Queues are used in various scenarios such as task scheduling, breadth-first search algorithms, and managing shared resources in operating systems.</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>FIFO Principle:</strong> The first element added is the first one to be removed.</li>
                    <li><strong>Two-ended Operations:</strong> Elements are added at the "rear" (or "tail") and removed from the "front" (or "head").</li>
                    <li><strong>Enqueue:</strong> Adds an element to the rear of the queue.</li>
                    <li><strong>Dequeue:</strong> Removes the element from the front of the queue.</li>
                    <li><strong>Front/Peek:</strong> Returns the front element without removing it.</li>
                </ul>
                <h3>Common Operations:</h3>
                <ul>
                    <li><strong>Enqueue:</strong> Add an element to the rear.</li>
                    <li><strong>Dequeue:</strong> Remove and return the front element.</li>
                    <li><strong>Front/Peek:</strong> Get the front element without removal.</li>
                    <li><strong>isEmpty:</strong> Check if the queue is empty.</li>
                    <li><strong>size:</strong> Get the number of elements in the queue.</li>
                </ul>
            `,
            operations: `
                <h3>Queue Operations</h3>
                <div class="operations-section">
                    <div class="operation-selector">
                        <button data-op="init-queue" class="active">Initialize/Clear</button>
                        <button data-op="enqueue-queue">Enqueue</button>
                        <button data-op="dequeue-queue">Dequeue</button>
                        <button data-op="front-queue">Front</button>
                        <button data-op="is-empty-queue">isEmpty</button>
                    </div>

                    <div id="init-queue-content" class="operation-content active">
                        <h4>Initialize Queue:</h4>
                        <label for="queueInput">Enter comma-separated numbers for the initial queue (e.g., 10,20,30):</label>
                        <input type="text" id="queueInput" placeholder="e.g., 10,20,30">
                        <button class="action-button" onclick="createQueue()">Create Queue</button>
                        <button class="action-button" onclick="clearQueue()">Clear Queue</button>
                    </div>

                    <div id="enqueue-queue-content" class="operation-content">
                        <h4>Enqueue Operation:</h4>
                        <label for="queueEnqueueValue">Value to enqueue:</label>
                        <input type="number" id="queueEnqueueValue" placeholder="Value">
                        <button class="action-button" onclick="enqueueQueue()">Enqueue</button>
                    </div>

                    <div id="dequeue-queue-content" class="operation-content">
                        <h4>Dequeue Operation:</h4>
                        <button class="action-button" onclick="dequeueQueue()">Dequeue</button>
                    </div>

                    <div id="front-queue-content" class="operation-content">
                        <h4>Front Operation:</h4>
                        <button class="action-button" onclick="frontQueue()">Front</button>
                    </div>

                    <div id="is-empty-queue-content" class="operation-content">
                        <h4>Check if Empty:</h4>
                        <button class="action-button" onclick="isQueueEmpty()">isEmpty?</button>
                    </div>

                    <div class="result" id="queueResult"></div>
                    <div class="error" id="queueError"></div>
                    <div class="visualization-container" id="queueVisualization"></div>
                </div>
            `
        },
        'binary-trees': {
            intro: `
                <h2>Binary Trees</h2>
                <p>A binary tree is a hierarchical data structure where each node has at most two children, typically referred to as the left child and the right child. This structure is ideal for organizing data in a way that allows for efficient searching, insertion, and deletion operations, especially in balanced trees.</p>
                <p>Binary trees are fundamental in computer science and are used in various applications, including databases, file systems, and compiler design.</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>Hierarchical:</strong> Data is organized in a parent-child relationship.</li>
                    <li><strong>Root Node:</strong> The topmost node of the tree.</li>
                    <li><strong>Leaves:</strong> Nodes with no children.</li>
                    <li><strong>At Most Two Children:</strong> Each node can have zero, one, or two children.</li>
                    <li><strong>No Cycles:</strong> There is a unique path from the root to any other node.</li>
                </ul>
                <h3>Common Operations:</h3>
                <ul>
                    <li><strong>Insertion:</strong> Adding a new node while maintaining tree properties.</li>
                    <li><strong>Deletion:</strong> Removing a node and restructuring the tree.</li>
                    <li><strong>Search:</strong> Finding a node with a specific value.</li>
                    <li><strong>Traversal:</strong> Visiting all nodes in a specific order (e.g., Inorder, Preorder, Postorder, Level-order).</li>
                </ul>
            `,
            operations: `
                <h3>Binary Tree Operations</h3>
                <div class="operations-section">
                    <div class="operation-selector">
                        <button data-op="init-tree" class="active">Initialize/Clear</button>
                        <button data-op="insert-tree">Insert</button>
                        <button data-op="delete-tree">Delete</button>
                        <button data-op="search-tree">Search</button>
                        <button data-op="traverse-tree">Traverse</button>
                    </div>

                    <div id="init-tree-content" class="operation-content active">
                        <h4>Initialize Binary Tree:</h4>
                        <label for="treeInput">Enter comma-separated numbers for the initial tree (e.g., 50,30,70,20,40,60,80):</label>
                        <input type="text" id="treeInput" placeholder="e.g., 50,30,70,20,40,60,80">
                        <button class="action-button" onclick="createTree()">Create Tree</button>
                        <button class="action-button" onclick="clearTree()">Clear Tree</button>
                    </div>

                    <div id="insert-tree-content" class="operation-content">
                        <h4>Insert Node:</h4>
                        <label for="treeInsertValue">Value to insert:</label>
                        <input type="number" id="treeInsertValue" placeholder="Value">
                        <button class="action-button" onclick="insertIntoTree()">Insert Node</button>
                    </div>

                    <div id="delete-tree-content" class="operation-content">
                        <h4>Delete Node:</h4>
                        <label for="treeDeleteValue">Value to delete:</label>
                        <input type="number" id="treeDeleteValue" placeholder="Value">
                        <button class="action-button" onclick="deleteFromTree()">Delete Node</button>
                    </div>

                    <div id="search-tree-content" class="operation-content">
                        <h4>Search Node:</h4>
                        <label for="treeSearchValue">Value to search:</label>
                        <input type="number" id="treeSearchValue" placeholder="Value">
                        <button class="action-button" onclick="searchTree()">Search</button>
                    </div>

                    <div id="traverse-tree-content" class="operation-content">
                        <h4>Tree Traversal:</h4>
                        <button class="action-button" onclick="traverseTree('inorder')">Inorder</button>
                        <button class="action-button" onclick="traverseTree('preorder')">Preorder</button>
                        <button class="action-button" onclick="traverseTree('postorder')">Postorder</button>
                        <button class="action-button" onclick="traverseTree('levelorder')">Level-order</button>
                    </div>

                    <div class="result" id="treeResult"></div>
                    <div class="error" id="treeError"></div>
                    <div class="tree-visualization" id="treeVisualization"></div>
                </div>
            `
        }
    };

    let currentArray = [];
    let currentListHead = null;
    let currentStack = [];
    let currentQueue = [];
    let currentTreeRoot = null;

    class ListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class TreeNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    function showResult(elementId, message) {
        const resultElement = document.getElementById(elementId);
        resultElement.textContent = message;
        resultElement.style.display = 'block';
        resultElement.classList.remove('error');
        resultElement.classList.add('result');
        setTimeout(() => resultElement.style.display = 'none', 5000);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.classList.remove('result');
        errorElement.classList.add('error');
        setTimeout(() => errorElement.style.display = 'none', 5000);
    }

    // --- Core UI Logic ---
    function loadContent(topic) {
        const content = dataStructuresContent[topic];
        if (content) {
            contentArea.innerHTML = `<section class="content-section active">${content.intro}${content.operations}</section>`;
            updateNavActiveState(topic);
            setupOperationSelectors(); // Setup listeners for operation buttons
            // Re-render visualization after content load
            if (topic === 'arrays') renderArrayVisualization();
            if (topic === 'linked-lists') renderListVisualization();
            if (topic === 'stacks') renderStackVisualization();
            if (topic === 'queues') renderQueueVisualization();
            if (topic === 'binary-trees') renderTreeVisualization();
        } else {
            contentArea.innerHTML = `<section class="welcome-section active"><h2>Content Not Found</h2><p>Please select a valid data structure.</p></section>`;
            updateNavActiveState(null);
        }
    }

    function updateNavActiveState(activeTopic) {
        navLinks.forEach(link => {
            if (link.dataset.topic === activeTopic) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function setupOperationSelectors() {
        const operationSelectors = document.querySelectorAll('.operation-selector');
        operationSelectors.forEach(selector => {
            selector.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON') {
                    // Remove active from all buttons in this selector
                    selector.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                    // Add active to clicked button
                    event.target.classList.add('active');

                    // Hide all operation content sections within this parent
                    const parentSection = event.target.closest('.operations-section');
                    if (parentSection) {
                        parentSection.querySelectorAll('.operation-content').forEach(content => {
                            content.classList.remove('active');
                        });
                        // Show the target content
                        const targetOpId = event.target.dataset.op + '-content';
                        const targetContent = document.getElementById(targetOpId);
                        if (targetContent) {
                            targetContent.classList.add('active');
                        }
                    }
                }
            });
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const topic = event.target.dataset.topic;
            loadContent(topic);
        });
    });

    // --- Array Operations ---
    function renderArrayVisualization(highlightedIndices = [], pivotIndex = -1, sortedIndices = []) {
        const vizContainer = document.getElementById('arrayVisualization');
        if (!vizContainer) return;

        vizContainer.innerHTML = '';
        if (currentArray.length === 0) {
            vizContainer.textContent = 'Array is empty.';
            return;
        }

        currentArray.forEach((item, index) => {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('array-element');
            elementDiv.textContent = item;

            if (highlightedIndices.includes(index)) {
                elementDiv.classList.add('comparing');
            }
            if (index === pivotIndex) {
                elementDiv.classList.add('pivot');
            }
            if (sortedIndices.includes(index)) {
                elementDiv.classList.add('sorted');
            }
            vizContainer.appendChild(elementDiv);
        });
    }

    window.createArray = function() {
        const input = document.getElementById('arrayInput').value;
        const values = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        currentArray = values;
        renderArrayVisualization();
        showResult('arrayResult', `Array created: [${currentArray.join(', ')}]`);
        document.getElementById('arrayInput').value = '';
    }

    window.clearArray = function() {
        currentArray = [];
        renderArrayVisualization();
        showResult('arrayResult', 'Array cleared.');
    }

    window.sortArray = async function(algorithm) {
        if (currentArray.length < 2) {
            showError('arrayError', 'Array must have at least 2 elements to sort.');
            return;
        }

        let arr = [...currentArray]; // Work on a copy

        const delay = (ms) => new Promise(res => setTimeout(res, ms));

        const updateViz = (arrState, highlighted = [], pivot = -1, sorted = []) => {
            currentArray = [...arrState]; // Update global array
            renderArrayVisualization(highlighted, pivot, sorted);
        };

        const swap = async (arr, i, j, delayMs = 300) => {
            updateViz(arr, [i, j]);
            await delay(delayMs);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            updateViz(arr, [i, j]);
            await delay(delayMs);
        };

        // Sorting Algorithms Implementation (simplified for visualization)
        if (algorithm === 'bubble') {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    await updateViz(arr, [j, j + 1]);
                    if (arr[j] > arr[j + 1]) {
                        await swap(arr, j, j + 1);
                    }
                }
                await updateViz(arr, [], -1, Array.from({length: i + 1}, (_, k) => n - 1 - k)); // Mark sorted
            }
        } else if (algorithm === 'selection') {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                await updateViz(arr, [i]);
                for (let j = i + 1; j < n; j++) {
                    await updateViz(arr, [i, j], minIdx);
                    if (arr[j] < arr[minIdx]) {
                        minIdx = j;
                    }
                }
                if (minIdx !== i) {
                    await swap(arr, i, minIdx);
                }
                await updateViz(arr, [], -1, Array.from({length: i + 1}, (_, k) => k)); // Mark sorted
            }
        } else if (algorithm === 'insertion') {
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    await updateViz(arr, [j, j + 1], -1, Array.from({length: i}, (_, k) => k));
                    arr[j + 1] = arr[j];
                    j = j - 1;
                    await delay(300);
                }
                arr[j + 1] = key;
                await updateViz(arr, [], -1, Array.from({length: i + 1}, (_, k) => k));
            }
        } else if (algorithm === 'quick') {
            const quickSort = async (arr, low, high) => {
                if (low < high) {
                    let pi = await partition(arr, low, high);
                    await quickSort(arr, low, pi - 1);
                    await quickSort(arr, pi + 1, high);
                }
            };

            const partition = async (arr, low, high) => {
                let pivot = arr[high];
                await updateViz(arr, [], high); // Highlight pivot
                await delay(300);

                let i = (low - 1);

                for (let j = low; j <= high - 1; j++) {
                    await updateViz(arr, [j], high);
                    if (arr[j] < pivot) {
                        i++;
                        await swap(arr, i, j);
                    }
                }
                await swap(arr, i + 1, high);
                return (i + 1);
            };

            await quickSort(arr, 0, arr.length - 1);
            await updateViz(arr, [], -1, Array.from({length: arr.length}, (_, k) => k)); // Mark all sorted
        } else if (algorithm === 'merge') {
            const mergeSort = async (arr, l, r) => {
                if (l >= r) {
                    return;
                }
                let m = l + parseInt((r - l) / 2);
                await mergeSort(arr, l, m);
                await mergeSort(arr, m + 1, r);
                await merge(arr, l, m, r);
            };

            const merge = async (arr, l, m, r) => {
                let n1 = m - l + 1;
                let n2 = r - m;

                let L = new Array(n1);
                let R = new Array(n2);

                for (let i = 0; i < n1; i++) {
                    L[i] = arr[l + i];
                }
                for (let j = 0; j < n2; j++) {
                    R[j] = arr[m + 1 + j];
                }

                let i = 0;
                let j = 0;
                let k = l;

                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    } else {
                        arr[k] = R[j];
                    }
                    await updateViz(arr, [k], -1, Array.from({length: k + 1}, (_, x) => x)); // Highlight current merged element
                    await delay(100);
                    k++;
                }

                while (i < n1) {
                    arr[k] = L[i];
                    await updateViz(arr, [k], -1, Array.from({length: k + 1}, (_, x) => x));
                    await delay(100);
                    i++;
                    k++;
                }

                while (j < n2) {
                    arr[k] = R[j];
                    await updateViz(arr, [k], -1, Array.from({length: k + 1}, (_, x) => x));
                    await delay(100);
                    j++;
                    k++;
                }
            };
            await mergeSort(arr, 0, arr.length - 1);
            await updateViz(arr, [], -1, Array.from({length: arr.length}, (_, k) => k)); // Mark all sorted
        }


        currentArray = arr; // Final update after sort
        renderArrayVisualization([], -1, Array.from({length: currentArray.length}, (_, k) => k));
        showResult('arrayResult', `${algorithm} completed. Array: [${currentArray.join(', ')}]`);
    }

    window.searchArray = async function() {
        const value = parseInt(document.getElementById('arraySearchInput').value);
        if (isNaN(value)) {
            showError('arrayError', 'Please enter a valid number to search.');
            return;
        }
        if (currentArray.length === 0) {
            showError('arrayError', 'Array is empty.');
            return;
        }

        let foundIndex = -1;
        for (let i = 0; i < currentArray.length; i++) {
            renderArrayVisualization(currentArray, [i]);
            await new Promise(res => setTimeout(res, 300)); // Delay for visualization
            if (currentArray[i] === value) {
                foundIndex = i;
                break;
            }
        }

        renderArrayVisualization(currentArray, []); // Clear highlight
        if (foundIndex !== -1) {
            renderArrayVisualization(currentArray, [foundIndex], -1, []); // Highlight found element
            showResult('arrayResult', `Value ${value} found at index ${foundIndex}.`);
        } else {
            showError('arrayError', `Value ${value} not found in the array.`);
        }
    }

    window.insertIntoArray = async function() {
        const value = parseInt(document.getElementById('arrayInsertValue').value);
        const indexInput = document.getElementById('arrayInsertIndex').value;
        const index = indexInput === '' ? currentArray.length : parseInt(indexInput);

        if (isNaN(value)) {
            showError('arrayError', 'Please enter a valid number for insertion.');
            return;
        }
        if (isNaN(index) || index < 0 || index > currentArray.length) {
            showError('arrayError', `Invalid index. Must be between 0 and ${currentArray.length}.`);
            return;
        }

        // Simulate insertion with shifting
        const tempArray = [...currentArray];
        tempArray.splice(index, 0, value);

        // Visualize shifting
        const vizContainer = document.getElementById('arrayVisualization');
        vizContainer.innerHTML = ''; // Clear for re-rendering

        for (let i = 0; i < tempArray.length; i++) {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('array-element');
            elementDiv.textContent = tempArray[i];

            if (i === index) {
                elementDiv.classList.add('inserted'); // Mark as inserted
            }
            vizContainer.appendChild(elementDiv);
            await new Promise(res => setTimeout(res, 100)); // Small delay for visual effect
        }

        currentArray = tempArray; // Update the actual array
        showResult('arrayResult', `Value ${value} inserted at index ${index}. Array: [${currentArray.join(', ')}]`);
        document.getElementById('arrayInsertValue').value = '';
        document.getElementById('arrayInsertIndex').value = '';
        renderArrayVisualization(currentArray); // Final render without highlights
    }

    window.deleteFromArray = async function() {
        const valueToDelete = parseInt(document.getElementById('arrayDeleteValue').value);
        const indexToDelete = parseInt(document.getElementById('arrayDeleteIndex').value);

        let targetIndex = -1;

        if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < currentArray.length) {
            targetIndex = indexToDelete;
        } else if (!isNaN(valueToDelete)) {
            targetIndex = currentArray.indexOf(valueToDelete);
        }

        if (targetIndex === -1) {
            showError('arrayError', 'Please enter a valid value or index to delete, or value not found.');
            return;
        }
        if (currentArray.length === 0) {
            showError('arrayError', 'Array is empty.');
            return;
        }

        // Visualize deletion
        const vizContainer = document.getElementById('arrayVisualization');
        const elements = vizContainer.children;

        if (elements[targetIndex]) {
            elements[targetIndex].classList.add('deleted'); // Apply deleted animation
            await new Promise(res => setTimeout(res, 500)); // Wait for animation
        }

        const deletedValue = currentArray.splice(targetIndex, 1); // Perform deletion
        showResult('arrayResult', `Value ${deletedValue} deleted from array. Array: [${currentArray.join(', ')}]`);
        document.getElementById('arrayDeleteValue').value = '';
        document.getElementById('arrayDeleteIndex').value = '';
        renderArrayVisualization(currentArray); // Re-render without the deleted element
    }

    // --- Linked List Operations ---
    function renderListVisualization(highlightNode = null) {
        const vizContainer = document.getElementById('listVisualization');
        if (!vizContainer) return;

        vizContainer.innerHTML = '';
        if (!currentListHead) {
            vizContainer.textContent = 'Linked List is empty.';
            return;
        }

        let currentNode = currentListHead;
        while (currentNode) {
            const nodeDiv = document.createElement('div');
            nodeDiv.classList.add('list-node');
            nodeDiv.textContent = currentNode.value;

            if (currentNode === highlightNode) {
                nodeDiv.classList.add('highlight');
            }

            // Add arrow if not the last node
            if (currentNode.next) {
                nodeDiv.innerHTML += ' &#x2192;'; // Right arrow HTML entity
            } else {
                nodeDiv.innerHTML += ' &#x2205;'; // Null symbol
            }

            vizContainer.appendChild(nodeDiv);
            currentNode = currentNode.next;
        }
    }

    window.createList = function() {
        const input = document.getElementById('listInput').value;
        const values = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));

        if (values.length === 0) {
            currentListHead = null;
        } else {
            currentListHead = new ListNode(values[0]);
            let current = currentListHead;
            for (let i = 1; i < values.length; i++) {
                current.next = new ListNode(values[i]);
                current = current.next;
            }
        }
        renderListVisualization();
        showResult('listResult', `Linked List created.`);
        document.getElementById('listInput').value = '';
    }

    window.clearList = function() {
        currentListHead = null;
        renderListVisualization();
        showResult('listResult', 'Linked List cleared.');
    }

    window.insertIntoList = async function() {
        const value = parseInt(document.getElementById('listInsertValue').value);
        const positionInput = document.getElementById('listInsertPosition').value;
        const position = positionInput === '' ? -1 : parseInt(positionInput); // -1 for tail

        if (isNaN(value)) {
            showError('listError', 'Please enter a valid number to insert.');
            return;
        }

        const newNode = new ListNode(value);

        if (!currentListHead || position === 0) { // Insert at head or empty list
            newNode.next = currentListHead;
            currentListHead = newNode;
            showResult('listResult', `Value ${value} inserted at the beginning.`);
        } else {
            let current = currentListHead;
            let prev = null;
            let count = 0;

            // Traverse to find insertion point
            while (current && count < position && position !== -1) {
                prev = current;
                current = current.next;
                count++;
            }

            if (position !== -1 && count !== position) {
                 showError('listError', `Position ${position} out of bounds.`);
                 return;
            }

            if (prev) {
                newNode.next = prev.next;
                prev.next = newNode;
                showResult('listResult', `Value ${value} inserted at position ${position === -1 ? 'end' : position}.`);
            } else if (position === -1) { // Insert at tail if list not empty and position is -1
                current = currentListHead;
                while(current.next) {
                    current = current.next;
                }
                current.next = newNode;
                 showResult('listResult', `Value ${value} inserted at the end.`);
            } else {
                showError('listError', `Could not insert at position ${position}.`);
                return;
            }
        }
        renderListVisualization(newNode); // Highlight newly inserted node
        await new Promise(res => setTimeout(res, 800));
        renderListVisualization(); // Clear highlight
        document.getElementById('listInsertValue').value = '';
        document.getElementById('listInsertPosition').value = '';
    }

    window.deleteFromList = async function() {
        const value = parseInt(document.getElementById('listDeleteValue').value);
        const position = parseInt(document.getElementById('listDeletePosition').value);

        if (currentListHead === null) {
            showError('listError', 'Linked list is empty. Nothing to delete.');
            return;
        }

        let deletedNode = null;

        if (!isNaN(position)) { // Delete by position
            if (position === 0) {
                deletedNode = currentListHead;
                currentListHead = currentListHead.next;
                showResult('listResult', `Node at position 0 (value ${deletedNode.value}) deleted.`);
            } else {
                let current = currentListHead;
                let prev = null;
                let count = 0;
                while (current && count < position) {
                    prev = current;
                    current = current.next;
                    count++;
                }
                if (current) {
                    deletedNode = current;
                    prev.next = current.next;
                    showResult('listResult', `Node at position ${position} (value ${deletedNode.value}) deleted.`);
                } else {
                    showError('listError', `Position ${position} out of bounds.`);
                }
            }
        } else if (!isNaN(value)) { // Delete by value
            let current = currentListHead;
            let prev = null;
            while (current && current.value !== value) {
                prev = current;
                current = current.next;
            }
            if (current) {
                deletedNode = current;
                if (prev) {
                    prev.next = current.next;
                } else {
                    currentListHead = current.next; // Deleting the head
                }
                showResult('listResult', `Node with value ${value} deleted.`);
            } else {
                showError('listError', `Value ${value} not found in the list.`);
            }
        } else {
            showError('listError', 'Please enter a value or a position to delete.');
            return;
        }

        if (deletedNode) {
            // Simulate deletion animation
            const vizContainer = document.getElementById('listVisualization');
            const nodes = vizContainer.children;
            let indexToDelete = -1;
            let tempNode = currentListHead;
            let i = 0;
            while(tempNode && tempNode !== deletedNode) {
                tempNode = tempNode.next;
                i++;
            }
            if (tempNode === deletedNode) {
                indexToDelete = i;
            }

            if (nodes[indexToDelete]) {
                nodes[indexToDelete].classList.add('deleted');
                await new Promise(res => setTimeout(res, 500));
            }
        }
        renderListVisualization(); // Re-render without deleted node
        document.getElementById('listDeleteValue').value = '';
        document.getElementById('listDeletePosition').value = '';
    }

    window.searchList = async function() {
        const value = parseInt(document.getElementById('listSearchValue').value);
        if (isNaN(value)) {
            showError('listError', 'Please enter a valid number to search.');
            return;
        }
        if (!currentListHead) {
            showError('listError', 'Linked list is empty.');
            return;
        }

        let current = currentListHead;
        let found = false;
        let position = 0;

        while (current) {
            renderListVisualization(current); // Highlight current node
            await new Promise(res => setTimeout(res, 500)); // Delay for visualization

            if (current.value === value) {
                found = true;
                break;
            }
            current = current.next;
            position++;
        }

        renderListVisualization(); // Clear highlights
        if (found) {
            showResult('listResult', `Value ${value} found at position ${position}.`);
        } else {
            showError('listError', `Value ${value} not found in the list.`);
        }
        document.getElementById('listSearchValue').value = '';
    }

    window.traverseList = async function() {
        if (!currentListHead) {
            showError('listError', 'Linked list is empty. Nothing to traverse.');
            return;
        }

        let traversalResult = [];
        let current = currentListHead;
        let delay = 500; // milliseconds

        while (current) {
            renderListVisualization(current); // Highlight current node
            traversalResult.push(current.value);
            await new Promise(resolve => setTimeout(resolve, delay));
            current = current.next;
        }

        renderListVisualization(); // Clear highlights
        showResult('listResult', `Traversal complete: [${traversalResult.join(' &#x2192; ')}]`);
    }

    // --- Stack Operations ---
    function renderStackVisualization(highlightIndex = -1) {
        const vizContainer = document.getElementById('stackVisualization');
        if (!vizContainer) return;

        vizContainer.innerHTML = '';
        if (currentStack.length === 0) {
            vizContainer.textContent = 'Stack is empty.';
            return;
        }

        // Render stack from bottom to top for visual clarity
        for (let i = 0; i < currentStack.length; i++) {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('array-element'); // Reusing array-element styling
            elementDiv.textContent = currentStack[i];
            elementDiv.style.marginBottom = '5px'; // Space between stack elements

            if (i === currentStack.length - 1 && highlightIndex === i) { // Highlight top element
                elementDiv.classList.add('highlight'); // Use a different highlight class if needed
            }
            vizContainer.prepend(elementDiv); // Add to top for stack effect
        }
    }

    window.createStack = function() {
        const input = document.getElementById('stackInput').value;
        const values = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        currentStack = values;
        renderStackVisualization();
        showResult('stackResult', `Stack created: [${currentStack.join(', ')}]`);
        document.getElementById('stackInput').value = '';
    }

    window.clearStack = function() {
        currentStack = [];
        renderStackVisualization();
        showResult('stackResult', 'Stack cleared.');
    }

    window.pushStack = async function() {
        const value = parseInt(document.getElementById('stackPushValue').value);
        if (isNaN(value)) {
            showError('stackError', 'Please enter a valid number to push.');
            return;
        }

        currentStack.push(value);
        renderStackVisualization(currentStack.length - 1); // Highlight newly pushed item
        showResult('stackResult', `Pushed ${value} onto the stack. Stack: [${currentStack.join(', ')}]`);
        document.getElementById('stackPushValue').value = '';
        await new Promise(res => setTimeout(res, 800)); // Short delay for animation
        renderStackVisualization(); // Clear highlight
    }

    window.popStack = async function() {
        if (currentStack.length === 0) {
            showError('stackError', 'Stack is empty. Cannot pop.');
            return;
        }

        const poppedValue = currentStack.pop();
        // Animate removal: find the element, mark as deleted, then re-render
        const vizContainer = document.getElementById('stackVisualization');
        if (vizContainer.firstChild) { // The top element is always the first child due to prepend
            vizContainer.firstChild.classList.add('deleted');
            await new Promise(res => setTimeout(res, 500)); // Wait for animation
        }

        renderStackVisualization(); // Re-render without the popped element
        showResult('stackResult', `Popped ${poppedValue} from the stack. Stack: [${currentStack.join(', ')}]`);
    }

    window.peekStack = function() {
        if (currentStack.length === 0) {
            showError('stackError', 'Stack is empty. Nothing to peek.');
            return;
        }
        const topValue = currentStack[currentStack.length - 1];
        renderStackVisualization(currentStack.length - 1); // Highlight top
        showResult('stackResult', `Top element: ${topValue}`);
    }

    window.isStackEmpty = function() {
        const empty = currentStack.length === 0;
        showResult('stackResult', `Stack is empty: ${empty}`);
    }

    // --- Queue Operations ---
    function renderQueueVisualization(highlightIndex = -1, removedIndex = -1) {
        const vizContainer = document.getElementById('queueVisualization');
        if (!vizContainer) return;

        vizContainer.innerHTML = '';
        if (currentQueue.length === 0) {
            vizContainer.textContent = 'Queue is empty.';
            return;
        }

        currentQueue.forEach((item, index) => {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('array-element'); // Reusing array-element styling
            elementDiv.textContent = item;

            if (index === highlightIndex) {
                elementDiv.classList.add('highlight'); // Highlight for enqueue
            }
            if (index === removedIndex) {
                elementDiv.classList.add('deleted'); // Highlight for dequeue
            }
            vizContainer.appendChild(elementDiv);
        });
    }

    window.createQueue = function() {
        const input = document.getElementById('queueInput').value;
        const values = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        currentQueue = values;
        renderQueueVisualization();
        showResult('queueResult', `Queue created: [${currentQueue.join(', ')}]`);
        document.getElementById('queueInput').value = '';
    }

    window.clearQueue = function() {
        currentQueue = [];
        renderQueueVisualization();
        showResult('queueResult', 'Queue cleared.');
    }

    window.enqueueQueue = async function() {
        const value = parseInt(document.getElementById('queueEnqueueValue').value);
        if (isNaN(value)) {
            showError('queueError', 'Please enter a valid number to enqueue.');
            return;
        }

        currentQueue.push(value);
        renderQueueVisualization(currentQueue.length - 1); // Highlight newly enqueued item
        showResult('queueResult', `Enqueued ${value} to the queue. Queue: [${currentQueue.join(', ')}]`);
        document.getElementById('queueEnqueueValue').value = '';
        await new Promise(res => setTimeout(res, 800)); // Short delay for animation
        renderQueueVisualization(); // Clear highlight
    }

    window.dequeueQueue = async function() {
        if (currentQueue.length === 0) {
            showError('queueError', 'Queue is empty. Cannot dequeue.');
            return;
        }

        const dequeuedValue = currentQueue.shift(); // Remove from front
        // Animate removal: Mark the first element as deleted, then re-render
        const vizContainer = document.getElementById('queueVisualization');
        if (vizContainer.firstChild) {
            vizContainer.firstChild.classList.add('deleted');
            await new Promise(res => setTimeout(res, 500)); // Wait for animation
        }

        renderQueueVisualization(); // Re-render without the dequeued element
        showResult('queueResult', `Dequeued ${dequeuedValue} from the queue. Queue: [${currentQueue.join(', ')}]`);
    }

    window.frontQueue = function() {
        if (currentQueue.length === 0) {
            showError('queueError', 'Queue is empty. Nothing at front.');
            return;
        }
        const frontValue = currentQueue[0];
        renderQueueVisualization(0); // Highlight front
        showResult('queueResult', `Front element: ${frontValue}`);
    }

    window.isQueueEmpty = function() {
        const empty = currentQueue.length === 0;
        showResult('queueResult', `Queue is empty: ${empty}`);
    }

    // --- Binary Tree Operations ---
    function renderTreeVisualization(root, highlightNodeValue = null) {
        const vizContainer = document.getElementById('treeVisualization');
        if (!vizContainer) return;

        vizContainer.innerHTML = '';
        if (!root) {
            vizContainer.textContent = 'Binary Tree is empty.';
            return;
        }

        // A very simplified way to render a tree using nested divs for structure.
        // For truly accurate and dynamic tree rendering (e.g., handling overlaps),
        // a more advanced library (like D3.js) or SVG would be necessary.
        function createNodeElement(node, parentX = 0, parentY = 0, currentLevel = 0, position = 'root') {
            if (!node) return null;

            const nodeContainer = document.createElement('div');
            nodeContainer.classList.add('tree-node-container');
            nodeContainer.style.position = 'relative'; // For lines

            const nodeDiv = document.createElement('div');
            nodeDiv.classList.add('tree-node');
            nodeDiv.textContent = node.value;

            if (node.value === highlightNodeValue) {
                nodeDiv.classList.add('highlight');
            }

            nodeContainer.appendChild(nodeDiv);

            const childrenContainer = document.createElement('div');
            childrenContainer.classList.add('tree-node-children');

            const leftChildElement = createNodeElement(node.left, 0, 0, currentLevel + 1, 'left');
            if (leftChildElement) {
                childrenContainer.appendChild(leftChildElement);
            }

            const rightChildElement = createNodeElement(node.right, 0, 0, currentLevel + 1, 'right');
            if (rightChildElement) {
                childrenContainer.appendChild(rightChildElement);
            }

            if (leftChildElement || rightChildElement) {
                nodeContainer.appendChild(childrenContainer);
            }

            return nodeContainer;
        }

        const treeElement = createNodeElement(root);
        if (treeElement) {
            vizContainer.appendChild(treeElement);
        }
    }

    window.createTree = function() {
        const input = document.getElementById('treeInput').value;
        const values = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));

        currentTreeRoot = null;
        if (values.length > 0) {
            // Simple BST insertion for initial creation
            values.forEach(val => {
                currentTreeRoot = insertNodeBST(currentTreeRoot, val);
            });
        }
        renderTreeVisualization(currentTreeRoot);
        showResult('treeResult', `Binary Tree created.`);
        document.getElementById('treeInput').value = '';
    }

    // Helper for creating BST
    function insertNodeBST(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = insertNodeBST(node.left, value);
        } else if (value > node.value) {
            node.right = insertNodeBST(node.right, value);
        }
        return node;
    }

    window.clearTree = function() {
        currentTreeRoot = null;
        renderTreeVisualization(currentTreeRoot);
        showResult('treeResult', 'Binary Tree cleared.');
    }

    window.insertIntoTree = async function() {
        const value = parseInt(document.getElementById('treeInsertValue').value);
        if (isNaN(value)) {
            showError('treeError', 'Please enter a valid number to insert.');
            return;
        }

        if (currentTreeRoot === null) {
            currentTreeRoot = new TreeNode(value);
            showResult('treeResult', `Root node ${value} inserted.`);
            renderTreeVisualization(currentTreeRoot, value);
            await new Promise(res => setTimeout(res, 800));
            renderTreeVisualization(currentTreeRoot);
            document.getElementById('treeInsertValue').value = '';
            return;
        }

        let current = currentTreeRoot;
        let inserted = false;
        while (!inserted) {
            renderTreeVisualization(currentTreeRoot, current.value); // Highlight path
            await new Promise(res => setTimeout(res, 500));

            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    inserted = true;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    inserted = true;
                } else {
                    current = current.right;
                }
            } else {
                showError('treeError', `Value ${value} already exists in the tree.`);
                renderTreeVisualization(currentTreeRoot);
                document.getElementById('treeInsertValue').value = '';
                return;
            }
        }

        showResult('treeResult', `Value ${value} inserted into the tree.`);
        renderTreeVisualization(currentTreeRoot, value); // Final highlight of inserted node
        await new Promise(res => setTimeout(res, 800));
        renderTreeVisualization(currentTreeRoot); // Clear highlight
        document.getElementById('treeInsertValue').value = '';
    }

    window.deleteFromTree = async function() {
        const value = parseInt(document.getElementById('treeDeleteValue').value);
        if (isNaN(value)) {
            showError('treeError', 'Please enter a valid number to delete.');
            return;
        }
        if (currentTreeRoot === null) {
            showError('treeError', 'Tree is empty. Nothing to delete.');
            return;
        }

        let nodeToDelete = null;

        // Recursive helper to find and mark node for deletion
        const findAndDelete = async (node, parent = null, isLeft = false) => {
            if (!node) return null;

            renderTreeVisualization(currentTreeRoot, node.value);
            await new Promise(res => setTimeout(res, 500));

            if (value < node.value) {
                node.left = await findAndDelete(node.left, node, true);
            } else if (value > node.value) {
                node.right = await findAndDelete(node.right, node, false);
            } else { // Node found
                nodeToDelete = node; // Mark the node to be deleted for visualization

                if (!node.left && !node.right) { // Case 1: No children
                    return null;
                } else if (!node.left) { // Case 2: One child (right)
                    return node.right;
                } else if (!node.right) { // Case 2: One child (left)
                    return node.left;
                } else { // Case 3: Two children
                    let temp = node.right;
                    while (temp.left !== null) {
                        temp = temp.left;
                    }
                    node.value = temp.value; // Replace with inorder successor
                    node.right = await findAndDelete(node.right, node, false); // Delete the inorder successor
                }
            }
            return node;
        };

        currentTreeRoot = await findAndDelete(currentTreeRoot);

        if (nodeToDelete) {
            // This part is tricky with simple DOM manipulation.
            // Ideally, you'd find the exact div for `nodeToDelete` and apply a 'deleted' class.
            // For now, we'll re-render the tree and then show the result message.
            renderTreeVisualization(currentTreeRoot); // Re-render tree without deleted node
            showResult('treeResult', `Value ${value} deleted from the tree.`);
        } else {
            showError('treeError', `Value ${value} not found in the tree.`);
        }
        document.getElementById('treeDeleteValue').value = '';
    }

    window.searchTree = async function() {
        const value = parseInt(document.getElementById('treeSearchValue').value);
        if (isNaN(value)) {
            showError('treeError', 'Please enter a valid number to search.');
            return;
        }
        if (currentTreeRoot === null) {
            showError('treeError', 'Tree is empty. Nothing to search.');
            return;
        }

        let current = currentTreeRoot;
        let found = false;

        while (current) {
            renderTreeVisualization(currentTreeRoot, current.value); // Highlight current node
            await new Promise(res => setTimeout(res, 500)); // Delay for visualization

            if (value === current.value) {
                found = true;
                break;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        renderTreeVisualization(currentTreeRoot); // Clear highlights
        if (found) {
            showResult('treeResult', `Value ${value} found in the tree.`);
        } else {
            showError('treeError', `Value ${value} not found in the tree.`);
        }
        document.getElementById('treeSearchValue').value = '';
    }

    window.traverseTree = async function(type) {
        if (!currentTreeRoot) {
            showError('treeError', 'Tree is empty. Nothing to traverse.');
            return;
        }

        let traversalResult = [];
        const delay = 500; // milliseconds

        async function inorder(node) {
            if (node) {
                await inorder(node.left);
                renderTreeVisualization(currentTreeRoot, node.value);
                traversalResult.push(node.value);
                await new Promise(resolve => setTimeout(resolve, delay));
                await inorder(node.right);
            }
        }

        async function preorder(node) {
            if (node) {
                renderTreeVisualization(currentTreeRoot, node.value);
                traversalResult.push(node.value);
                await new Promise(resolve => setTimeout(resolve, delay));
                await preorder(node.left);
                await preorder(node.right);
            }
        }

        async function postorder(node) {
            if (node) {
                await postorder(node.left);
                await postorder(node.right);
                renderTreeVisualization(currentTreeRoot, node.value);
                traversalResult.push(node.value);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        async function levelorder(root) {
            if (!root) return;
            let q = [root];
            while (q.length > 0) {
                let node = q.shift();
                renderTreeVisualization(currentTreeRoot, node.value);
                traversalResult.push(node.value);
                await new Promise(resolve => setTimeout(resolve, delay));

                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }

        switch (type) {
            case 'inorder':
                await inorder(currentTreeRoot);
                break;
            case 'preorder':
                await preorder(currentTreeRoot);
                break;
            case 'postorder':
                await postorder(currentTreeRoot);
                break;
            case 'levelorder':
                await levelorder(currentTreeRoot);
                break;
            default:
                break;
        }

        renderTreeVisualization(currentTreeRoot); // Clear highlights
        showResult('treeResult', `${type.charAt(0).toUpperCase() + type.slice(1)} Traversal: [${traversalResult.join(', ')}]`);
    }

});