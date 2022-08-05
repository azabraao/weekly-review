import { memo } from "react";

import { BulletPoint, Text, XIcon } from "components/atoms";
import { sprinkles } from "styles/sprinkles.css";
import { classes } from "utils";
import { listItem, xIcon } from "./styles.css";

interface ListItemProps {
  onRemove?: (id: number) => void;
  item: TypeListItem;
}

const ListItem = ({ item, onRemove }: ListItemProps) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <div
      className={classes(
        sprinkles({
          gap: "6x",
          display: "flex",
          alignItems: "center",
        }),
        listItem
      )}
    >
      <div
        className={sprinkles({
          gap: "2x",
          display: "flex",
          alignItems: "center",
        })}
      >
        <BulletPoint />
        <Text>{item.content}</Text>
      </div>
      {onRemove && <XIcon className={xIcon} onClick={handleRemove} />}
    </div>
  );
};

export default memo(ListItem);
