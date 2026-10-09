class Solution {

    isValidBST(root) {
        return this.valid(root, -Infinity, Infinity);
    }

    valid(node, left, right) {
        if (node === null) {
            return true;
        }

        if (!(left < node.val && node.val < right))
        {
            return false;
        } return (
            this.valid(node.left, left, node.val) &&

            this.valid(node.right, node.val, right)
        );
    }
}