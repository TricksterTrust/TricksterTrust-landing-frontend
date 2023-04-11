import React from "react";
import styles from "./Search.module.scss"

export const Search = () => {
	return (
		<div className={styles.search}>
			<div className={styles.searchContainer}>
				<h3>Поиск по сайту</h3>
				<div className={styles.info}>
					<input placeholder="Что вы ищите?" type="text"/>
					<div className="btn">Найти</div>
				</div>
			</div>
		</div>
	)
}

export default Search;