import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/categories";
import { Button } from "@/components/ui/button";

interface FormValues {
  category: string;
  subcategory: string;
}

export function CategorySelectForm() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const selectedCategory = watch("category");
  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  const onSubmit = (data: FormValues) => {
    console.log("Datos seleccionados:", data);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">Categoría</label>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Selecciona una categoría" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {currentCategory && (
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Subcategoría</label>
          <Controller
            name="subcategory"
            control={control}
            rules={{ required: "Selecciona una subcategoría" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!selectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una subcategoría" />
                </SelectTrigger>
                <SelectContent>
                  {currentCategory.subcategories.map((subcategory) => (
                    <SelectItem key={subcategory.id} value={subcategory.id}>
                      {subcategory.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.subcategory && (
            <p className="text-sm text-red-500">{errors.subcategory.message}</p>
          )}
        </div>
      )}

      <Button type="submit">Enviar</Button>
    </form>
  );
}