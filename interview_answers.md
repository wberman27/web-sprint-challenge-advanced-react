# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    A stateful component is a component that uses hooks for its stateful logic and a functional component uses state passed from a parent function component.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    The componentWillMount function is called only once during the first render. ComponentWillUpdate will be called any time any state changes.

3. Define stateful logic.

    Stateful logic is the process of setting up state within a hook that can be used within multiple components.

4. What are the three step of creating a successful test? What is done in each phase?

    The three steps of creating a successful test are Arrange, Act, and Assert. Arrange is the render of element to the DOM, Act is a query for a specific node, and Assert is the expectation that the node has rendered and has been successful.