`/api/get_seats_status` (GET)

```typescript
type GetAllSeatsStatusRequest = {};

type GetAllSeatsStatusResponse = {
  data: {
    status: Record<string, boolean>;
    row: number;
    col: number;
  };
  error?: number;
};
```

`/api/book` (POST)

```typescript
type BookSeatRequest = {
  id: string;
};

type BookSeatResponse = {
  error?: number;
};
```

`/api/reset_db` (POST)

```typescript
type ResetDbRequest = {
  row: number;
  col: number;
};

type ResetDbResponse = {
  error?: number;
};
```
