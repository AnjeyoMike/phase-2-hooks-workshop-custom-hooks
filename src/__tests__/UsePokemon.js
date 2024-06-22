// src/__extraTests__/02.extra-1.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import usePokemon from "../exercise/usePokemon";

test("returns a pending state while waiting for the response", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("charmander")
  );

  // Verify the initial state is pending
  expect(result.current).toMatchObject({
    data: null,
    errors: null,
    status: "pending",
  });

  // Wait for the hook to update
  await waitForNextUpdate();

  // Verify the state after fetching data
  expect(result.current).toMatchObject({
    data: expect.any(Object),
    errors: null,
    status: "resolved",
  });
});

test("returns a pokemon based on the search result after fetching data", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("charmander")
  );

  await waitForNextUpdate();

  expect(result.current).toMatchObject({
    data: expect.any(Object),
    errors: null,
    status: "resolved",
  });

  expect(result.current.data.name).toBe("charmander");
});

test("returns an error state if the API responds with an error", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePokemon("nonexistentpokemon")
  );

  await waitForNextUpdate();

  expect(result.current).toMatchObject({
    data: null,
    errors: expect.any(Object),
    status: "rejected",
  });
});
