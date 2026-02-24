import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

const RepoFilters = ({ sort, order, onSortChange, onOrderChange, disabled }) => {
    const selectClass = "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity:50 disabled:cursor-not-allowed";

    return (
        <div className="flex flex-wrap items-center gap-4 mb-6 justify-center">
            <div className="flex items-center gap-2">
                <FaSort className="text-gray-400" />
                <label className="text-gray-400 text-sm">
                    Sort by:
                </label>
                <select value={sort} onChange={(e) => onSortChange(e.target.value)} disabled={disabled} className={selectClass}>
                    <option value={"stars"}>Stars</option>
                    <option value={"forks"}>Forks</option>
                    <option value={"updates"}>Updates</option>
                    <option value={"help-wanted-issues"}>Help Wanted</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                {order === 'asc' ?
                    <FaSortUp className="text-gray-400" />
                    : <FaSortDown className="text-gray-400" />
                }
                <label className="text-gray-400 text-sm">Order:</label>
                <select value={order} onChange={(e) => onOrderChange(e.target.value)} disabled={disabled} className={selectClass}>
                    <option value={"desc"}>Descending</option>
                    <option value={"asc"}>Ascending</option>
                </select>
            </div>
        </div>
    );
};

export default RepoFilters;