// LCA in a binary tree of integers
function lowestCommonAncestor(root, value1, value2) {
	while (root !== null) {
		if (value1 < root.value && value2 < root.value) {
			root = root.left;
		} else if (value1 > root.value && value2 > root.value) {
			root = root.right;
		} else {
			return root;
		}
	}
	// if tree is empty
	return null;
}
